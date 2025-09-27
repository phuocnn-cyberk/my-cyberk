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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-15">
          <h2 className="text-5xl font-medium text-black mb-6">
            Our Core Values
          </h2>
          <p className="text-xl font-light text-black/80">
            At Cyberk, our Web3 expertise is guided by curiosity, courage,
            integrity, dedication, and craftsmanship - helping startups launch
            faster and achieve lasting success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="space-y-10">
            {CORE_VALUES.map((value) => (
              <div
                key={value.title}
                className="grid grid-cols-3 gap-6 items-start"
              >
                <h3 className="col-span-1 text-xl font-medium text-[#2684FF]">
                  {value.title}
                </h3>
                <p className="col-span-2 text-xl font-light text-black/80">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="rounded-lg overflow-hidden aspect-[416/541] w-full max-w-[416px]">
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
