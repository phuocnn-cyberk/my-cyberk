"use client";

import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useFadeInStagger } from "@/lib/animations";

const PROCESS_STEPS = [
  {
    label: "Discovery & Analysis",
    image: "/images/discovery-analysis.png",
  },
  {
    label: "Solution Design",
    image: "/images/meeting-image.png",
  },
  {
    label: "Agile Development",
    image: "/images/agile.png",
  },
  {
    label: "Quality Assurance",
    image: "/images/qa.png",
  },
  {
    label: "Launch & Hypercare",
    image: "/images/launch-hypercare.png",
  },
  {
    label: "Discovery & Warranty & Ongoing Support",
    image: "/images/discovery.png",
  },
];

export const HowWeWorkSection: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useFadeInStagger({
    scopeRef: sectionRef,
    titleRef,
    pRef,
    ctaRef: gridRef,
  });

  const startTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % PROCESS_STEPS.length);
    }, 3000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    startTimer();
  };

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[733px] mx-auto mb-6 md:mb-20">
          <h2
            ref={titleRef}
            className="text-2xl md:text-5xl leading-tight font-medium text-[#212121] mb-2 md:mb-6"
          >
            How We Work
          </h2>
          <p
            ref={pRef}
            className="text-sm md:text-xl font-normal leading-tight text-[#212121]"
          >
            Cyberk is built for founders who can’t afford to wait. We deliver
            MVPs in less than 30 days, combining speed with quality and
            security.
          </p>
        </div>

        <div
          ref={gridRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[672/421]">
            {PROCESS_STEPS.map((step, index) => (
              <Image
                key={step.label}
                src={step.image}
                alt="How we work process"
                width={672}
                height={421}
                className={cn(
                  "absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out",
                  activeIndex === index ? "opacity-100" : "opacity-0"
                )}
                priority={index === 0}
              />
            ))}
          </div>
          <div className="flex flex-col gap-4 md:gap-10">
            {PROCESS_STEPS.map((step, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={step.label}
                  className={cn(
                    "flex items-center gap-4 cursor-pointer leading-tight group",
                    isActive ? "text-[#2684FF]" : "text-[#212121]"
                  )}
                  onClick={() => handleStepClick(index)}
                >
                  <div
                    className={cn(
                      "w-3 h-3 rounded-full transition-colors",
                      isActive
                        ? "bg-[#2684FF]"
                        : "bg-gray-300 group-hover:bg-gray-400"
                    )}
                  />
                  <p
                    className={cn(
                      "text-sm md:text-lg transition-colors font-medium"
                    )}
                  >
                    {step.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
