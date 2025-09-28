import { FC } from "react";
import { ContactButton } from "@/components/common/contact-button";
import Image from "next/image";
import { GridPatternSpotlight } from "@/components/ui/grid-parttern-spotlight-card";
import IsThisRightForYou from "./components/is-this-right-for-you";
import Benefits from "./components/benefits";
import OurProcess from "./components/our-process";
import NotableCaseStudies from "./components/notable-case-studies";

const MvpDevelopmentPage: FC = () => {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <GridPatternSpotlight className="h-[747px]">
        <div className="container mx-auto relative flex h-full items-center px-5">
          <div className="grid w-full grid-cols-1 items-center lg:grid-cols-12 gap-5 md:gap-0 max-md:mt-20">
            <div className="lg:col-span-6">
              <h1 className="mb-4 md:mb-6 text-sm md:text-2xl font-medium text-[#2684FF]">
                MVP Development
              </h1>
              <h2 className="mb-2 md:mb-6 text-2xl md:text-5xl font-normal">
                Turn your idea into a real product in less than 30 days.
              </h2>
              <p className="leading-tight mb-2 md:mb-6 md:max-w-[450px] text-sm md:text-2xl font-extralight">
                Our MVP Development service helps you validate your concept
                quickly, reduce time-to-market, and minimize wasted investment.
              </p>
              <p className="leading-tight mb-8 md:mb-10 md:max-w-[450px] text-sm md:text-2xl font-extralight">
                We handle everything from ideation to launch, so you can test
                your business model, attract early users, and secure funding.
              </p>
              <ContactButton
                text="CONTACT US"
                className="h-11 !px-6 text-sm md:text-base font-extralight"
              />
            </div>
            <div className="flex justify-center lg:col-span-6">
              <Image
                src="/images/mvp-image.png"
                alt="MVP Development"
                width={550}
                className="w-full h-full object-cover"
                height={550}
              />
            </div>
          </div>
        </div>
      </GridPatternSpotlight>
      <IsThisRightForYou />
      <Benefits />
      <OurProcess />
      <NotableCaseStudies />
    </main>
  );
};

export default MvpDevelopmentPage;
