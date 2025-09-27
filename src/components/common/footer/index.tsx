"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { ContactButton } from "../contact-button";

const FOOTER_LINKS = {
  COMPANY: [
    { label: "About us", href: "#" },
    { label: "Service", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Blog", href: "#" },
  ],
  SERVICES: [
    { label: "MVP Development", href: "#" },
    { label: "Smart Contract Development", href: "#" },
    { label: "Dedicated Lab", href: "#" },
    { label: "MVP Agent Development", href: "#" },
  ],
  CONTACT: [
    { label: "Linkedin", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Telegram", href: "#" },
    { label: "Hello@cyberk.io", href: "mailto:Hello@cyberk.io" },
  ],
};

const getFormattedTime = () => {
  const now = new Date();
  const utcTime = now.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
  });
  return `HaNoi, VietNam GMT+7 | ${utcTime} UTC`;
};

const LiveClock: FC = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    setTime(getFormattedTime());
    const intervalId = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <span>{time}</span>;
};

const FooterLinkColumn: FC<{
  title: string;
  links: { label: string; href: string }[];
}> = ({ title, links }) => (
  <div>
    <h3 className="text-xl text-[#272525] tracking-widest mb-4 md:mb-6">
      {title}
    </h3>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.label}>
          <Link
            href={link.href}
            className="text-[#717070] whitespace-nowrap hover:text-black cursor-pointer"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const Footer: FC = () => {
  return (
    <footer className="bg-[#F6FAFF] pt-15 md:pt-23">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <div className="max-w-[373px] lg:col-span-1 mb-12 lg:mb-0">
            <div className="flex items-center justify-between lg:block">
              <h2 className="text-2xl md:text-5xl font-medium text-[#2D2D2D] leading-tight lg:mb-8">
                Ready To
                <br />
                Get Started!
              </h2>
              <ContactButton className="h-9 px-8 text-sm" />
            </div>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12">
            <FooterLinkColumn title="COMPANY" links={FOOTER_LINKS.COMPANY} />
            <FooterLinkColumn title="CONTACT" links={FOOTER_LINKS.CONTACT} />
            <FooterLinkColumn title="SERVICES" links={FOOTER_LINKS.SERVICES} />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 text-center sm:text-left sm:flex-row justify-between items-center pt-14 md:pt-25 pb-5 text-sm text-black/50">
          <p>All copyrights reserved by Cyberk © 2025</p>
          <LiveClock />
        </div>
      </div>
    </footer>
  );
};
