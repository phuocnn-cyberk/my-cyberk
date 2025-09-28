import { FC } from "react";
import { ContactButton } from "@/components/common/contact-button";
import Image from "next/image";
import { GridPatternSpotlight } from "@/components/ui/grid-parttern-spotlight-card";
import IsThisRightForYou from "./components/is-this-right-for-you";
import WhyStartWithMvpAgent from "./components/why-start-with-mvp-agent";
import OurProcess from "./components/our-process";
import WhatYouGet from "./components/what-you-get";

const MvpAgentDevelopmentPage: FC = () => {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <GridPatternSpotlight className="h-[747px]">
        <div className="container mx-auto relative flex h-full items-center px-5">
          <div className="grid w-full grid-cols-1 items-center lg:grid-cols-12 gap-5 md:gap-0 max-md:mt-20">
            <div className="lg:col-span-6">
              <h1 className="mb-4 md:mb-6 text-sm md:text-2xl font-bold text-[#2684FF]">
                MVP Agent Development
              </h1>
              <h2 className="mb-2 md:mb-6 text-2xl md:text-5xl font-medium leading-tight">
                We focus on building a functional MVP agent that solves one core
                business problem
              </h2>
              <p className="leading-tight mb-2 md:mb-6 md:max-w-[550px] text-sm md:text-xl font-light">
                So you can validate your concept, collect real data, and make
                smart decisions about future investment.
              </p>
              <p className="leading-tight mb-8 md:mb-10 md:max-w-[550px] text-sm md:text-xl font-light">
                You provide the vision, title, and domain for the agent. We
                handle everything from definition to deployment, ensuring you
                get a usable, measurable result with minimal risk and cost.
              </p>
              <ContactButton
                text="CONTACT US"
                className="h-11 !px-6 text-sm md:text-base font-normal"
              />
            </div>
            <div className="flex justify-center lg:col-span-6">
              <Image
                src="/images/mvp-agent-image.png"
                alt="MVP Agent Development"
                width={550}
                className="w-full h-full object-cover"
                height={550}
              />
            </div>
          </div>
        </div>
      </GridPatternSpotlight>
      <IsThisRightForYou />
      <WhyStartWithMvpAgent />
      <OurProcess />
      <WhatYouGet />
    </main>
  );
};

export default MvpAgentDevelopmentPage;
