import { FC } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export const HeroSection: FC = () => {
  return (
    <section className="relative text-white h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex items-center gap-2 mb-4">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
            <div className="absolute inset-1 rounded-full bg-blue-500/30 animate-pulse delay-200"></div>
            <div className="absolute inset-2 rounded-full bg-blue-500 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
          </div>
          <span className="text-sm tracking-widest text-gray-400">
            _FASTEST
          </span>
        </div>

        <h1 className="text-5xl text-[#000000] md:text-7xl font-bold mb-6 max-w-4xl leading-tight">
          <span className="flex items-center justify-center gap-4">
            Fastest
            <Image src="/bolt.svg" alt="bolt" width={43} height={62} />
            Blockchain
          </span>
          Development Partner
        </h1>

        <p className="max-w-[1000px] font-light text-2xl text-[#161616] mb-8">
          Cyberk is the fastest blockchain development partner for startups -
          launch your MVP in 30 days so you’re always ready for the next big
          opportunity.
        </p>

        <Button className="bg-[#2172E6] text-base h-12 btn-discover hover:text-black text-white flex items-center gap-2 px-6">
          CONTACT US <ArrowRight size={20} />
        </Button>
      </div>
    </section>
  );
};
