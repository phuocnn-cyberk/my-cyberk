"use client";

import { FC, useRef } from "react";
import { ServiceCards } from "./components/service-cards";
import { useFadeInStagger } from "@/lib/animations";

export const CyberkSolutionSection: FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useFadeInStagger({
    scopeRef: sectionRef,
    titleRef,
    pRef,
    ctaRef: cardsRef,
  });

  return (
    <section
      ref={sectionRef}
      className="bg-[url('/images/cyberk-solution-bg.png')] bg-cover bg-center py-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-10 md:mb-16">
          <h2
            ref={titleRef}
            className="text-2xl md:text-5xl font-normal text-black mb-4"
          >
            Cyberk Solutions
          </h2>
          <p
            ref={pRef}
            className="text-base md:text-xl text-[#292929] font-extralight"
          >
            Cyberk is built for founders who can’t afford to wait. We deliver
            MVPs in less than 30 days, combining speed with quality and
            security.
          </p>
        </div>
        <div ref={cardsRef}>
          <ServiceCards />
        </div>
      </div>
    </section>
  );
};
