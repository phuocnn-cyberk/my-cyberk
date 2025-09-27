"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AlignJustify } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { MenuItem } from "./components";
import Image from "next/image";
import { ContactButton } from "../contact-button";

const MENU_LIST = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Service",
    path: "#",
  },
  {
    label: "Case Studies",
    path: "#",
  },
  {
    label: "About Us",
    path: "/about-us",
  },
];

export const Header: FC = () => {
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-6 w-4 mr-4">
                <AlignJustify className={`!h-4 !w-[18px] text-[#323232]`} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="ml-4 w-56 border-none bg-[#18181A] text-white">
              {MENU_LIST.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link href={item.path} className="w-full">
                    {item.label}
                  </Link>
                </DropdownMenuItem>
              ))}
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
          {MENU_LIST.map((item) => (
            <Link key={item.label} href={item.path}>
              <MenuItem isActive={pathname === item.path}>
                {item.label}
              </MenuItem>
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <ContactButton className="text-xs lg:text-base h-7 lg:h-10" />
      </div>
    </header>
  );
};
