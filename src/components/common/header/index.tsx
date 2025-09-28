"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AlignJustify, ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { MenuItem as DesktopMenuItem } from "./components";
import Image from "next/image";
import { ContactButton } from "../contact-button";
import { cn } from "@/lib/utils";

const SERVICE_SUB_ITEMS = [
  { label: "MVP Development", path: "/services/mvp-development" },
  {
    label: "Smart Contract Development",
    path: "/services/smart-contract-development",
  },
  { label: "Dedicated Lab", path: "#" },
  { label: "MVP Agent Development", path: "/services/mvp-agent-development" },
];

const CASE_STUDIES_SUB_ITEMS = [
  { label: "Portfolio - Aethir", path: "/case-studies/aethir" },
  { label: "Portfolio - Coinseeker", path: "/case-studies/coinseeker" },
  { label: "Portfolio - Helix", path: "/case-studies/helix" },
  { label: "Portfolio - Oracler", path: "/case-studies/oracler" },
];

const MENU_LIST = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Service",
    path: "/services",
    subItems: SERVICE_SUB_ITEMS,
  },
  {
    label: "Case Studies",
    path: "/case-studies",
    subItems: CASE_STUDIES_SUB_ITEMS,
  },
  {
    label: "About Us",
    path: "/about-us",
  },
];

const MobileSubMenu: FC<{
  item: (typeof MENU_LIST)[0];
  closeMenu: () => void;
  pathname: string;
}> = ({ item, closeMenu, pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownMenuItem
      onSelect={(e) => e.preventDefault()}
      className="!p-0 focus:!bg-transparent"
    >
      <div className="w-full">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex cursor-pointer items-center justify-between rounded-lg bg-[#F6FAFF] p-3"
        >
          <span className="text-sm font-medium text-[#212121]">
            {item.label}
          </span>
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {isOpen && (
          <div className="flex flex-col gap-4 rounded-b-lg bg-[#F6FAFF] px-3 pb-3">
            {item.subItems?.map((subItem) => (
              <Link
                key={subItem.label}
                href={subItem.path}
                onClick={closeMenu}
                className={cn(
                  "w-full cursor-pointer text-xs font-light text-[#000] hover:text-black",
                  pathname === subItem.path && "!text-[#2684FF]"
                )}
              >
                {subItem.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </DropdownMenuItem>
  );
};

export const Header: FC = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full flex justify-between items-center px-5 py-2 transition-all duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white" : "bg-transparent"}`}
    >
      <div className="flex items-center">
        <div className="lg:hidden flex items-center">
          <DropdownMenu
            open={isMobileMenuOpen}
            onOpenChange={setMobileMenuOpen}
          >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-4 mr-4">
                <AlignJustify className={`!h-4 !w-[18px] text-[#323232]`} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 space-y-8 border-none h-screen bg-white p-6 text-black">
              {MENU_LIST.map((item) => {
                if (item.subItems) {
                  return (
                    <MobileSubMenu
                      key={item.label}
                      item={item}
                      closeMenu={() => setMobileMenuOpen(false)}
                      pathname={pathname}
                    />
                  );
                }
                return (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link
                      href={item.path}
                      className={cn(
                        "w-full",
                        pathname === item.path && "text-[#2684FF]"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Link href="/">
          <Image
            src="/cyberk-logo.svg"
            alt="logo"
            width={173}
            height={32}
            className="hidden lg:block"
          />
          <Image
            src="/cyberk-logo-mobile.svg"
            alt="logo"
            width={168}
            height={22}
            className="block lg:hidden"
          />
        </Link>
      </div>
      <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <nav className="flex items-center">
          {MENU_LIST.map((item) => {
            if (item.subItems) {
              const isServiceActive =
                item.path !== "#" && pathname.startsWith(item.path);
              return (
                <DropdownMenu key={item.label}>
                  <DropdownMenuTrigger asChild>
                    <DesktopMenuItem isActive={isServiceActive}>
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </DesktopMenuItem>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-white rounded-xl shadow-lg border-none mt-2 w-56">
                    {item.subItems.map((subItem, index) => (
                      <DropdownMenuItem
                        key={subItem.label}
                        asChild
                        className="p-0"
                      >
                        <Link
                          href={subItem.path}
                          className={cn(
                            "cursor-pointer text-sm text-[#4B4B4B] hover:text-black whitespace-nowrap font-light w-full px-4 py-2 block",
                            index === 0 && "!text-[#2684FF]"
                          )}
                        >
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            return (
              <Link key={item.label} href={item.path}>
                <DesktopMenuItem isActive={pathname === item.path}>
                  {item.label}
                </DesktopMenuItem>
              </Link>
            );
          })}
        </nav>
      </div>
      <div>
        <ContactButton className="text-xs lg:text-base h-7 lg:h-10" />
      </div>
    </header>
  );
};
