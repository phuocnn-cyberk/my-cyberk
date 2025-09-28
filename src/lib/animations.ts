"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RefObject } from "react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface FadeInStaggerProps {
  titleRef?: RefObject<Element | null>;
  pRef?: RefObject<Element | null>;
  ctaRef?: RefObject<Element | null>;
  scopeRef: RefObject<Element | null>;
}

export const useFadeInStagger = ({
  titleRef,
  pRef,
  ctaRef,
  scopeRef,
}: FadeInStaggerProps) => {
  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power2.out" },
        scrollTrigger: {
          trigger: scopeRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
      let h1Split: SplitText | undefined;
      let pSplit: SplitText | undefined;

      if (titleRef?.current) {
        h1Split = new SplitText(titleRef.current, { type: "lines" });
        gsap.set(h1Split.lines, {
          opacity: 0,
          y: 24,
          filter: "blur(8px)",
        });
        tl.to(
          h1Split.lines,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.6,
            stagger: 0.07,
          },
          0.2
        );
      }

      if (pRef?.current) {
        pSplit = new SplitText(pRef.current, { type: "lines" });
        gsap.set(pSplit.lines, {
          opacity: 0,
          y: 16,
          filter: "blur(6px)",
        });
        tl.to(
          pSplit.lines,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.5,
            stagger: 0.06,
          },
          "-=0.3"
        );
      }

      if (ctaRef?.current) {
        const ctas = Array.from(ctaRef.current.children);
        if (ctas.length > 0) {
          gsap.set(ctas, { opacity: 0, y: 16 });
          tl.to(
            ctas,
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.06 },
            "-=0.2"
          );
        }
      }

      return () => {
        h1Split?.revert();
        pSplit?.revert();
      };
    },
    { scope: scopeRef }
  );
};
