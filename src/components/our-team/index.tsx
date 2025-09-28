import { FC } from "react";
import Image from "next/image";

const TEAM_IMAGES = [
  "/images/avan-cyberk.png",
  "/images/cyberk-collective.png",
  "/images/kate-cyberk.png",
  "/images/brian-cyberk.png",
];

const SCROLLING_IMAGES = [...TEAM_IMAGES, ...TEAM_IMAGES];

export const OurTeamSection: FC = () => {
  return (
    <section className="bg-white py-15 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-5xl leading-tight font-normal text-[#212121] mb-6 md:mb-16">
          Our Team
        </h2>
      </div>
      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee">
          {SCROLLING_IMAGES.map((src, index) => (
            <div key={index} className="flex-shrink-0 mx-1 md:mx-4">
              <div className="relative w-[207px] h-[136px] md:w-[488px] md:h-[320px] rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Our team member ${index + 1}`}
                  width={488}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
