import { FC } from "react";
import Image from "next/image";

const TEAM_IMAGES = [
  "/images/avan-cyberk.png",
  "/images/cyberk-collective.png",
  "/images/kate-cyberk.png",
  "/images/brian-cyberk.png",
];

// Duplicate the array for a seamless loop
const SCROLLING_IMAGES = [...TEAM_IMAGES, ...TEAM_IMAGES];

export const OurTeamSection: FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-medium text-black mb-16">Our Team</h2>
      </div>
      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee">
          {SCROLLING_IMAGES.map((src, index) => (
            <div key={index} className="flex-shrink-0 mx-4">
              <div className="relative w-[400px] h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={src}
                  alt={`Our team member ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
