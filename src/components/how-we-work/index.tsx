"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const PROCESS_STEPS = [
  "Discovery & Analysis",
  "Solution Design",
  "Agile Development",
  "Quality Assurance",
  "Launch & Hypercare",
  "Discovery & Warranty & Ongoing Support",
];

export const HowWeWorkSection: FC = () => {
  const [activeStep, setActiveStep] = useState(PROCESS_STEPS[0]);

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[733px] mx-auto mb-6 md:mb-20">
          <h2 className="text-2xl md:text-5xl leading-tight font-medium text-[#212121] mb-2 md:mb-6">
            How We Work
          </h2>
          <p className="text-sm md:text-xl font-normal leading-tight text-[#212121]">
            Cyberk is built for founders who can’t afford to wait. We deliver
            MVPs in less than 30 days, combining speed with quality and
            security.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/images/how-we-work.png"
              alt="How we work process"
              width={672}
              height={421}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-10">
            {PROCESS_STEPS.map((step) => {
              const isActive = activeStep === step;
              return (
                <div
                  key={step}
                  className={cn(
                    "flex items-center gap-4 cursor-pointer leading-tight group",
                    isActive ? "text-[#2684FF]" : "text-[#212121]"
                  )}
                  onClick={() => setActiveStep(step)}
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
                      "text-sm md:text-2xl transition-colors",
                      isActive
                        ? "font-medium"
                        : "font-light group-hover:text-black/80"
                    )}
                  >
                    {step}
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
