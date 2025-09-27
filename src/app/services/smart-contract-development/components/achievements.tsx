"use client";

import { FC, useEffect, useRef } from "react";
import Image from "next/image";
import { animate } from "framer-motion";

interface CounterProps {
  from: number;
  to: number;
}

const Counter: FC<CounterProps> = ({ from, to }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const controls = animate(from, to, {
      duration: 2,
      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={nodeRef} />;
};

const Achievements: FC = () => {
  return (
    <section className="bg-white py-15 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="relative">
            <Image
              src="/images/achievements-image.png"
              alt="Achievement Image"
              width={703}
              height={604}
              className="rounded-lg w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(270deg,_#FFFFFF_4.18%,_rgba(255,255,255,0)_36.04%,_rgba(255,255,255,0)_72.09%,_#FFFFFF_90.11%)]" />
          </div>
          <div>
            <h2 className="mb-10 text-2xl md:text-5xl font-medium text-[#212121]">
              Achievements
            </h2>
            <p className="mb-5 md:mb-8 text-base md:text-xl text-[#212121]">
              <span className="font-bold">What We've Achieved:</span> <br />
              $40M+ TVL in deployed contracts
            </p>
            <div className="flex items-end space-x-5">
              <div className="md:text-[240px] text-[178px] h-[178px] md:h-[240px] font-medium text-[#2684FF] leading-tight">
                <Counter from={0} to={40} />
              </div>
              <span className="text-base font-light md:text-3xl text-[#212121]">
                Million Dollars
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
