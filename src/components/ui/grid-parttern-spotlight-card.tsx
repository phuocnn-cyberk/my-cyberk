"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { cn } from "@/lib/utils";
import React from "react";

export function GridPatternSpotlight({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("relative rounded bg-white", className)}>
      <Spotlight
        className="from-blue-800 via-blue-600 to-blue-400 blur-xl"
        size={100}
      />
      <div className="absolute inset-0">
        <svg className="h-full w-full">
          <defs>
            <pattern
              id="grid-pattern"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <path
                xmlns="http://www.w3.org/2000/svg"
                d="M0 4H4M4 4V0M4 4H8M4 4V8"
                stroke="currentColor"
                strokeOpacity="0.3"
                className="stroke-white"
              />
              <rect
                x="3"
                y="3"
                width="2"
                height="2"
                fill="currentColor"
                fillOpacity="0.25"
                className="fill-white"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
      {children}
    </div>
  );
}
