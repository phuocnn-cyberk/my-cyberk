import { FC } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const OurStorySection: FC = () => {
  return (
    <section className="bg-[#F6FAFF] py-15 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-5xl font-medium text-center text-black mb-6 md:mb-20">
          Our Story
        </h2>
        <div className="max-w-[1090px] mx-auto">
          <Card className="shadow-xl rounded-2xl border-none p-0">
            <CardContent className="p-0 flex flex-wrap lg:flex-nowrap gap-6">
              <div className="relative w-full h-63 lg:h-[392px] rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none lg:w-[520px] flex-shrink-0 shadow-[0px_4px_4px_0px_#00000040]">
                <Image
                  src="/images/cyberk-collective.png"
                  alt="Cyberk team collective"
                  width={520}
                  height={392}
                  className="rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,white_0%,rgba(255,255,255,0)_45.32%)] rounded-t-2xl lg:rounded-l-2xl lg:rounded-t-none" />
                <div className="absolute top-6 inset-0 flex items-start justify-center">
                  <Image
                    src="/cyberk-logo.svg"
                    alt="Cyberk Logo"
                    width={216}
                    height={40}
                    className="w-[216px] h-10 object-cover"
                  />
                </div>
              </div>
              <div className="p-6 max-md:pt-0 space-y-4 text-base text-[#212121] leading-[24px] rounded-b-2xl lg:rounded-b-none">
                <p>
                  Before starting Cyberk, Jon and Anderson were founders chasing
                  their own startup dreams. They had the vision, but they hit
                  the same wall that slows down so many early-stage teams: slow
                  execution. By the time their MVP was ready, the market had
                  already moved on — costing them time, money, and a shot at
                  success.
                </p>
                <p>
                  They realized what most early-stage startups truly need: a
                  lean, reliable, execution-first Web3 development partner that
                  understands how critical time-to-market is in the fast-moving
                  blockchain space. No over-engineering. No delays. Just a team
                  that moves fast, builds well, and delivers results.
                </p>
                <p>
                  That’s why they created Cyberk — a Web3 tech studio built by
                  founders, for founders. Cyberk is the partner that understands
                  what’s at stake—because they’ve been there too.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
