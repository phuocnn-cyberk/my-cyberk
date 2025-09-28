"use client";

import { FC } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const BoltIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
    />
  </svg>
);

const ShoppingBagIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.658-.463 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
    />
  </svg>
);

const SparklesIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z"
    />
  </svg>
);

const LayoutIcon: FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 8.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 8.25 20.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6A2.25 2.25 0 0 1 15.75 3.75h2.25A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6ZM13.5 15.75A2.25 2.25 0 0 1 15.75 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
    />
  </svg>
);

const benefits = [
  {
    icon: BoltIcon,
    title: "Faster Time-to-Value",
    description:
      "Launch your agent in weeks, not months, and start solving real problems immediately.",
  },
  {
    icon: ShoppingBagIcon,
    title: "Low Initial Cost & Risk",
    description:
      "Avoid large upfront investments—validate your idea before scaling.",
  },
  {
    icon: SparklesIcon,
    title: "Data-Driven Validation",
    description:
      "Use real performance data to decide what features to build next, instead of guessing.",
  },
  {
    icon: LayoutIcon,
    title: "Solid Foundation",
    description:
      "The MVP agent is built with best practices, making it easy to expand into a full-featured system later.",
  },
];

const WhyStartWithMvpAgent: FC = () => {
  return (
    <section className="bg-white py-15 md:py-20">
      <div className="container mx-auto px-5">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-medium text-[#212121]">
            Why Start with an MVP Agent?
          </h2>
        </div>
        <div className="grid grid-cols-1 items-center gap-6 md:gap-12 md:grid-cols-2">
          <div>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="w-full space-y-8"
            >
              {benefits.map((benefit, index) => (
                <AccordionItem
                  value={`item-${index}`}
                  key={index}
                  className="border-none"
                >
                  <AccordionTrigger className="p-0 hover:no-underline group">
                    <div className="flex items-start text-left">
                      <benefit.icon className="h-5 md:h-6 w-5 md:w-6 text-[#2684FF] mr-2 md:mr-4 flex-shrink-0" />
                      <h3 className="text-sm md:text-lg font-medium text-[#212121] group-data-[state=open]:text-[#2684FF]">
                        {benefit.title}
                      </h3>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-[1.75rem] md:pl-[2.5rem]">
                    {benefit.description && (
                      <p className="mt-2 text-sm md:text-base text-black/60">
                        {benefit.description}
                      </p>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div>
            <Image
              src="/images/mvp-agent.png"
              alt="Why Start with an MVP Agent?"
              width={567}
              height={369}
              className="rounded-lg w-full h-full md:w-[520px] md:h-[369px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStartWithMvpAgent;
