import { FC } from "react";
import Image from "next/image";

const OurApproach: FC = () => {
  return (
    <section className="py-20 md:py-28 bg-[#F6FAFF]">
      <div className="container mx-auto px-5">
        <div className="max-w-[1200px] mx-auto">
          {/* Titles */}
          <div className="text-left lg:ml-[450px] lg:pr-16">
            <p className="text-lg font-normal text-[#2684FF] mb-4">
              Our Approach
            </p>
            <h2 className="text-2xl md:text-[40px] font-normal text-[#212121] mb-8 lg:mb-12 leading-tight">
              The right team, built around your goals — proactive, seamless, and
              part of your journey
            </h2>
          </div>

          {/* This div is the positioning context for the image on desktop */}
          <div className="lg:relative">
            {/* The Card */}
            <div className="bg-white rounded-2xl shadow-[0px_4px_20px_0px_#0000001A] w-full p-8 lg:h-[280px] lg:py-12 lg:pl-[450px] lg:pr-16 flex flex-col justify-center">
              <div>
                <Image
                  src="/stars.svg"
                  alt="stars"
                  width={46}
                  height={46}
                  className="mb-6"
                />
                <p className="text-base font-extralight text-[#4B4B4B]">
                  Cyberk collaborates with clients to recruit, build, and manage
                  the most suitable team for your product goals. This team works
                  as an extension of your business, proactively proposing
                  solutions, improvements, and providing ongoing operational
                  support.
                </p>
              </div>
            </div>

            {/* The Image - appears after the card on mobile, but is positioned absolutely on desktop */}
            <div className="mt-8 lg:mt-0 lg:absolute lg:z-10 lg:bottom-10 lg:left-10">
              <Image
                src="/images/kanz-cyberk.png"
                alt="Our Approach"
                width={368}
                height={472}
                className="rounded-2xl w-full max-w-[368px] h-auto lg:h-[472px] object-cover shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
