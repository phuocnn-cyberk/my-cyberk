import Image from "next/image";
import { FC } from "react";

const CORE_VALUES = [
  {
    title: "Curiosity",
    description:
      "Always learning, open to new ideas, respecting those who came before us.",
  },
  {
    title: "Courage",
    description:
      "Facing challenges head-on, leading innovation without tear of failure.",
  },
  {
    title: "Integrity",
    description:
      "Building trust through honesty, reliability, and keeping our word.",
  },
  {
    title: "Dedication",
    description:
      "Working wholeheartedly, putting client success above all else.",
  },
  {
    title: "Craftsmanship",
    description:
      "Pursuing excellence in every detail, delivering high-quality products.",
  },
];

export const OurCoreValuesSection: FC = () => {
  return (
    <section className="py-15 md:py-24 bg-white">
      <div className="container mx-auto px-5">
        <div className="text-center max-w-4xl mx-auto mb-6 md:mb-15">
          <h2 className="text-2xl md:text-5xl font-medium text-black mb-4 md:mb-6">
            Our Core Values
          </h2>
          <p className="text-sm md:text-xl font-light text-[#212121]">
            At Cyberk, our Web3 expertise is guided by curiosity, courage,
            integrity, dedication, and craftsmanship - helping startups launch
            faster and achieve lasting success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="space-y-0 md:space-y-10 order-last md:order-first">
            {CORE_VALUES.map((value) => (
              <div
                key={value.title}
                className="grid md:grid-cols-3 gap-3 md:gap-6 items-start max-md:py-3"
              >
                <h3 className="col-span-1 text-base md:text-xl font-medium text-[#2684FF]">
                  {value.title}
                </h3>
                <p className="col-span-2 text-xs md:text-xl font-light text-[#212121]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end order-first md:order-last max-md:mb-3">
            <div className="rounded-lg overflow-hidden aspect-[416/541] w-full md:max-w-[416px]">
              <Image
                src="/images/our-vision-1.png"
                alt="Our Core Values Image"
                width={416}
                height={541}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
