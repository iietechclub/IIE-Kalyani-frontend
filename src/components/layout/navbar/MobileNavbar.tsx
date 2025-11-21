"use client";
import Link from "next/link";
import { Activity, useState } from "react";
import { LuChevronDown, LuExternalLink, LuLink, LuMenu } from "react-icons/lu";

import DynamicIcon from "@/components/ui/dynamic-icon";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

export default function MobileNavbar({ data }: { data: GlobalPageData }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <Sheet open={isOpen} onOpenChange={() => setIsOpen((v) => !v)}>
      <SheetTrigger asChild className="lg:hidden">
        <button
          type="button"
          className="-mr-2 min-h-11 min-w-11 rounded-lg p-3 transition-colors active:bg-white/10"
          aria-label="Open menu"
        >
          <LuMenu className="size-7" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-72 overflow-y-auto">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">
          Navigate through {data.organizationName} website sections
        </SheetDescription>
        <div className="mt-8 flex flex-col space-y-2 px-4">
          {data.menus.map(({ documentId, title, contains, link, submenus }) =>
            contains === "SubMenus" ? (
              <div key={documentId}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-2 text-[#E63946]"
                  onClick={() =>
                    setActiveMenu((v) => (v !== documentId ? documentId : null))
                  }
                >
                  <span className="text-lg">{title}</span>
                  <LuChevronDown
                    className={cn(
                      "size-5 transition-transform",
                      activeMenu === documentId && "rotate-180",
                    )}
                  />
                </button>
                <Activity
                  mode={activeMenu === documentId ? "visible" : "hidden"}
                >
                  <div className="space-y-4 pl-4">
                    {submenus.map(({ title, children }) => (
                      <div key={title}>
                        <h3 className="mb-2 text-[#FF6B35]">{title}</h3>
                        <ul className="space-y-2">
                          {children.map(({ id, label, url, icon }) => (
                            <li key={id}>
                              <Link
                                href={url?.url ?? "#"}
                                target={url?.newTab ? "_blank" : undefined}
                                rel={
                                  url?.newTab
                                    ? "noopener noreferrer"
                                    : undefined
                                }
                                className="ml-1 flex items-center gap-2 text-gray-700 text-sm hover:text-[#E63946]"
                              >
                                {icon && (
                                  <DynamicIcon
                                    name={icon}
                                    className="size-4 shrink-0 text-red-500"
                                  />
                                )}
                                {label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Activity>
              </div>
            ) : (
              <Link
                key={documentId}
                href={link.url?.url ?? "#"}
                target={link.url?.newTab ? "_blank" : undefined}
                rel={link.url?.newTab ? "noopener noreferrer" : undefined}
                className="flex items-center py-2 text-lg text-primary/90"
              >
                {title}
                {link.url?.newTab ? (
                  <LuExternalLink className="ml-3 size-4" />
                ) : (
                  <LuLink className="ml-3 size-4" />
                )}
              </Link>
            ),
          )}
          {/* <div className="flex justify-center">
            <a
              href="/admission/apply.html"
              className="block rounded-lg bg-[#E63946] px-8 py-3 text-center text-white transition-all hover:bg-[#FF6B35]"
            >
              Apply Now
            </a>
          </div> */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
