"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useEffectEvent, useState } from "react";
import { LuChevronDown, LuExternalLink, LuMail, LuPhone } from "react-icons/lu";

import BackendImage from "@/components/BackendImage";
import MobileNavbar from "@/components/layout/navbar/MobileNavbar";

import DynamicIcon from "@/components/ui/dynamic-icon";

import { cn } from "@/lib/utils";

let initialMount = true;

export default function NavbarClient({ data }: { data: GlobalPageData }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const isHomePage = pathname === "/";
  const bgTransparent = isHomePage && !isScrolled;

  const handleScroll = useEffectEvent(() => {
    setIsScrolled(window.scrollY > 50);
  });

  useEffect(() => {
    // Scroll to top on route change except for hash links
    if (!initialMount && !pathname.split("/").reverse()[0].startsWith("#")) {
      window.scrollTo(0, 0);
    } else initialMount = false;
  }, [pathname]);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 shadow-primary/10 transition-all duration-500",
        !bgTransparent && "shadow-xs",
      )}
    >
      {/* Upper Utility Bar - Hidden on mobile */}
      <div
        className={cn(
          "hidden bg-primary transition-all duration-500 md:block",
          bgTransparent && "bg-transparent",
        )}
      >
        <div className="mx-auto max-w-380 px-4 py-2 md:px-6">
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
          bgTransparent && "bg-transparent",
        )}
      >
        <div className="relative mx-auto max-w-380 px-4 md:px-6">
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Logo */}
            <Link
              href="/"
              className="group flex cursor-pointer items-center gap-2 md:gap-4"
            >
              <BackendImage
                preload
                width="64"
                height="64"
                src={data.organizationLogo.url}
                alt={data.organizationLogo.alternativeText}
                className="size-10 object-contain sm:size-12 xl:size-16"
              />
              <div className="shrink-0">
                <h1
                  className={cn(
                    "font-medium text-black text-xl tracking-tight transition-colors duration-500 group-hover:opacity-80 sm:text-2xl lg:text-[1.68rem] xl:text-3xl [@media(64rem<=width<69.5rem)]:text-[1.5rem]",
                    bgTransparent && "text-white",
                  )}
                >
                  {data.organizationName}
                </h1>
                <p
                  className={cn(
                    "text-orange-500 text-xs transition-colors duration-500",
                    bgTransparent && "text-white",
                  )}
                >
                  {data.organizationSubtitle}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {data.menus.map((menu, idx) =>
                  menu.contains === "SubMenus" ? (
                    <li key={menu.documentId} className="group/menu shrink-0">
                      <button
                        type="button"
                        className={cn(
                          "relative flex items-center gap-1 rounded-lg py-1.5 text-primary text-sm transition-colors hover:bg-white/5 lg:px-2 xl:px-3 xl:text-base 2xl:px-4",
                          bgTransparent && "text-white",
                        )}
                      >
                        {menu.title}
                        <LuChevronDown className="size-4" />

                        <div className="absolute inset-x-0 bottom-0 hidden h-5 translate-y-full group-hover/menu:block" />
                      </button>

                      <Dropdown
                        submenus={menu.submenus}
                        context={{
                          title: menu.image_title,
                          subtitle: menu.image_subtitle,
                        }}
                        image={menu.image}
                      />
                    </li>
                  ) : (
                    <li key={menu.documentId}>
                      <Link
                        href={menu.link.url?.url ?? "#"}
                        target={menu.link.url?.newTab ? "_blank" : undefined}
                        className={cn(
                          "mx-4 flex items-center gap-1 rounded-lg px-1.5 py-2 font-medium text-primary text-sm transition-colors lg:px-2 xl:px-3 xl:text-base 2xl:px-4",
                          idx + 1 === data.menus.length && "mr-0",

                          menu.link.variant === "Primary" &&
                            "bg-primary text-primary-foreground text-sm hover:bg-[#ff6b35]",

                          menu.link.variant === "Secondary" &&
                            cn(
                              "border border-primary/10 bg-secondary px-[15px] py-[7px] text-sm hover:bg-secondary/90",
                              bgTransparent && "border-secondary",
                            ),

                          menu.link.variant === "Ghost" &&
                            cn(
                              "ml-0 font-normal hover:bg-white/5",
                              bgTransparent && "text-white",
                            ),
                        )}
                      >
                        {menu.title}{" "}
                        {menu.link.url?.newTab && <LuExternalLink />}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <MobileNavbar data={data} bgTransparent={bgTransparent} />
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
  context: { title?: string; subtitle?: string };
};
const Dropdown = ({ submenus, image, context, columns = 2 }: DropdownProps) => (
  <div className="-translate-x-1/2 absolute top-22 left-1/2 z-50 max-h-0 w-full max-w-7xl overflow-hidden rounded-2xl bg-transparent opacity-0 shadow-lg transition-all duration-500 group-hover/menu:max-h-250 group-hover/menu:opacity-100">
    <div className="border-neutral-100 border-t-2 bg-white transition-all duration-250">
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
                  <p className="mb-2 border-neutral-100 border-b px-4 pb-3 font-medium text-gray-800 text-sm uppercase tracking-[1.2px]">
                    {title}
                  </p>
                  <ul className="custom-scrollbar max-h-73 space-y-0.5 overflow-y-auto pr-2">
                    {children.map(({ id, label, url, icon }) => (
                      <li key={id}>
                        <Link
                          href={url?.url ?? "#"}
                          className="flex items-center gap-3.5 rounded-md px-4 py-3 text-gray-600 transition-colors duration-150 hover:bg-red-50 hover:text-red-700"
                        >
                          {icon && (
                            <DynamicIcon
                              name={icon}
                              className="size-4 shrink-0 text-red-500"
                            />
                          )}
                          <span className="text-sm leading-4">{label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section (35%) - Image Preview */}
          <div className="relative h-80 shrink-0 grow-0 basis-[35%] overflow-hidden rounded-xl">
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
            {image && (
              <BackendImage
                fill
                src={image.url}
                alt={image.alternativeText}
                className="size-full object-cover transition-all duration-300"
              />
            )}

            <div className="absolute right-0 bottom-0 left-0 z-20 p-6">
              {context.title && (
                <p className="mb-1 text-lg text-white">{context.title}</p>
              )}
              {context.subtitle && (
                <p className="text-sm text-white/90">{context.subtitle}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
