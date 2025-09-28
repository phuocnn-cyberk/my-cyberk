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
    <section className="bg-[#F9FCFF] md:bg-white py-15 md:py-20">
      <div className="container mx-auto px-4">
        <div className="hidden items-center gap-12 md:grid md:grid-cols-2">
          <div className="relative">
            <Image
              src="/images/achievements-image.png"
              alt="Achievement Image"
              width={703}
              height={604}
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(270deg,_#FFFFFF_4.18%,_rgba(255,255,255,0)_36.04%,_rgba(255,255,255,0)_72.09%,_#FFFFFF_90.11%)]" />
          </div>
          <div>
            <h2 className="mb-10 text-2xl text-[#212121] md:text-5xl">
              Achievements
            </h2>
            <p className="text-[#212121] mb-8 text-xl">
              <span className="font-medium">What We Have Achieved:</span> <br />
              <span className="font-extralight">
                $40M+ TVL in deployed contracts
              </span>
            </p>
            <div className="flex items-end space-x-5">
              <div className="h-[178px] text-[178px] font-normal leading-tight text-[#2684FF] md:h-[240px] md:text-[240px]">
                <Counter from={0} to={40} />
              </div>
              <span className="text-[32px] font-extralight text-[#212121]">
                Million Dollars
              </span>
            </div>
          </div>
        </div>

        <div className="md:hidden">
          <h2 className="mb-10 text-center text-2xl text-[#212121]">
            Achievements
          </h2>
          <div className="mx-auto max-w-[303px] rounded-lg bg-white p-8 text-center shadow-[0px_10px_40px_0px_rgba(0,0,0,0.1)]">
            <p className="text-xl text-[#212121]">What We’ve Achieved</p>
            <p className="my-6 text-5xl font-medium text-[#2684FF]">$40M+</p>
            <p className="text-xl text-[#212121] font-extralight">
              TVL in deployed contracts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
