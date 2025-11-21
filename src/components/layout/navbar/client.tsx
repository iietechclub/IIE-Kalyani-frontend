"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";
import { LuChevronDown, LuExternalLink, LuMail, LuPhone } from "react-icons/lu";

import BackendImage from "@/components/BackendImage";
import MobileNavbar from "@/components/layout/navbar/MobileNavbar";

import { Button } from "@/components/ui/button";
import DynamicIcon from "@/components/ui/dynamic-icon";

import { cn } from "@/lib/utils";

// import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function NavbarClient({ data }: { data: GlobalPageData }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(true);
  const isHomePage = pathname === "/";

  const handleScroll = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 50);
  });

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 shadow-lg transition-all duration-500",
        isHomePage && !isScrolled && "shadow-none",
      )}
    >
      {/* Upper Utility Bar - Hidden on mobile */}
      <div
        className={cn(
          "hidden bg-primary transition-all duration-500 md:block",
          isHomePage && !isScrolled && "bg-transparent",
        )}
      >
        <div className="container mx-auto px-4 py-2 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 lg:gap-6">
              <a
                href={`tel:${data.contactNo}`}
                className="flex items-center gap-2 text-white transition-colors hover:text-[#FFB627]"
              >
                <LuPhone className="size-4" />
                <span className="text-xs lg:text-sm">{data.contactNo}</span>
              </a>
              <a
                href={`mailto:${data.contactEmail}`}
                className="flex items-center gap-2 text-white transition-colors hover:text-[#FFB627]"
              >
                <LuMail className="size-4" />
                <span className="text-xs lg:text-sm">{data.contactEmail}</span>
              </a>
            </div>
            <div className="flex items-center gap-3 lg:gap-6">
              {data.quickLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.url?.url ?? "#"}
                  target={link.url?.newTab ? "_blank" : undefined}
                  rel={link.url?.newTab ? "noopener noreferrer" : undefined}
                  className="text-white text-xs transition-colors hover:text-[#FFB627] lg:text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={cn(
          "bg-white transition-all duration-500",
          isHomePage && !isScrolled && "bg-transparent",
        )}
      >
        <div className="container relative mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <Link
              href="/"
              className="group flex cursor-pointer items-center gap-2 md:gap-4"
            >
              <BackendImage
                preload
                src={data.organizationLogo.url}
                alt={data.organizationLogo.alternativeText}
                width="64"
                height="64"
                className="size-12 object-contain md:size-16"
              />
              <div>
                <h1
                  className={cn(
                    "font-medium text-3xl text-black tracking-tight transition-all duration-500 group-hover:opacity-80",
                    isHomePage && !isScrolled && "text-white",
                  )}
                >
                  {data.organizationName}
                </h1>
                <p
                  className={cn(
                    "text-orange-500 text-xs transition-colors duration-500",
                    isHomePage && !isScrolled && "text-white",
                  )}
                >
                  {data.organizationSubtitle}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden items-center gap-1 lg:flex">
              {data.menus.map(
                ({ documentId, title, contains, link, submenus }, idx) =>
                  contains === "SubMenus" ? (
                    <div key={documentId} className="group/menu">
                      <button
                        type="button"
                        className={cn(
                          "group/menu-guide relative flex items-center gap-1 rounded-lg px-4 py-2 text-primary transition-colors hover:bg-white/5",
                          isHomePage && !isScrolled && "text-white",
                        )}
                      >
                        {title}
                        <LuChevronDown className="size-4" />

                        <div className="absolute inset-x-0 bottom-0 hidden h-5 translate-y-full group-hover/menu-guide:block" />
                      </button>

                      <Dropdown
                        submenus={submenus}
                        context={{
                          title: "Explore $_{item.name}",
                          subtitle: "Excellence in Education",
                        }}
                        image={{
                          url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
                          alternativeText: "$_{item.name} at IIE Kalyani",
                        }}
                      />
                    </div>
                  ) : (
                    <Link
                      key={documentId}
                      href={link.url?.url ?? "#"}
                      target={link.url?.newTab ? "_blank" : undefined}
                      className={cn(
                        "mx-4 flex items-center gap-1 rounded-lg px-4 py-2 font-medium text-primary transition-colors",
                        idx + 1 === data.menus.length && "mr-0",

                        link.variant === "Primary" &&
                          "bg-primary text-primary-foreground text-sm hover:bg-[#ff6b35]",

                        link.variant === "Secondary" &&
                          cn(
                            "border border-primary/10 bg-secondary px-[15px] py-[7px] text-sm hover:bg-secondary/90",
                            isHomePage && !isScrolled && "border-secondary",
                          ),

                        link.variant === "Ghost" &&
                          cn(
                            "ml-0 font-normal hover:bg-white/5",
                            isHomePage && !isScrolled && "text-white",
                          ),
                      )}
                    >
                      {title} {link.url?.newTab && <LuExternalLink />}
                    </Link>
                  ),
              )}
            </nav>

            {/* Mobile Menu Button */}
            <MobileNavbar data={data} />
          </div>
        </div>
      </div>
    </header>
  );
}

type DropdownProps = {
  submenus: Submenu[];
  columns?: number;
  image?: Media;
  context: { title: string; subtitle: string };
};
const Dropdown = ({ submenus, image, context, columns = 2 }: DropdownProps) => (
  <div className="-translate-x-1/2 absolute top-22 left-1/2 z-50 max-h-0 w-full max-w-7xl overflow-hidden opacity-0 transition-all duration-500 ease-in-[cubic-bezier(0.4,0,0.2,1)] group-hover/menu:max-h-[1000px] group-hover/menu:opacity-100">
    <div
      className="rounded-2xl border-neutral-100 border-t bg-white shadow-lg transition-all duration-250"
      style={{ boxShadow: "0 6px 25px rgba(0,0,0,0.12)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex">
          {/* Left Section (65%) - Submenus */}
          <div className="shrink-0 grow basis-[65%]">
            <div
              className={cn(
                "grid h-full grid-cols-1 gap-5 divide-x divide-neutral-100",
                columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2",
              )}
            >
              {submenus.map(({ id, title, children }, idx) => (
                <div key={id} className={cn(!idx ? "px-5" : "pr-5")}>
                  <h3
                    className="mb-2 border-neutral-100 border-b px-4 pb-3 font-medium text-gray-800 text-sm uppercase"
                    style={{
                      fontSize: "14px",
                      letterSpacing: "1.2px",
                    }}
                  >
                    {title}
                  </h3>
                  <div className="custom-scrollbar max-h-[280px] space-y-0.5 overflow-y-auto pr-2">
                    {children.map(({ id, label, url, icon }) => (
                      <Link
                        key={id}
                        href={url?.url ?? "#"}
                        className="flex items-center gap-2.5 rounded-xl px-4 py-2.5 text-gray-600 transition-colors duration-150 hover:bg-red-50 hover:text-red-700"
                      >
                        {icon && (
                          <DynamicIcon
                            name={icon}
                            className="size-4 shrink-0 text-red-500"
                          />
                        )}
                        <span className="text-sm">{label}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section (35%) - Image Preview */}
          <div className="relative h-80 shrink-0 grow-0 basis-[35%] overflow-hidden rounded-xl">
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

            {/* <ImageWithFallback
                  src={imageUrl}
                  alt={altText}
                  className="size-full object-cover transition-all duration-300"
                /> */}

            <div className="absolute right-0 bottom-0 left-0 z-20 p-6">
              <h4 className="mb-1 text-lg text-white">{context.title}</h4>
              <p className="text-sm text-white/90">{context.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
