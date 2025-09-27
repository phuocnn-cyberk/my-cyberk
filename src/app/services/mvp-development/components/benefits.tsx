import Image from "next/image";
import { FC } from "react";

const content = {
  title: "Benefits",
  subtitle: "This service is ideal for founders, startups, and businesses who:",
  benefits: [
    "Rapid product launch (less than 30 days)",
    "Fixed, transparent pricing",
    "Flexible, adaptable solutions",
    "Save time, opportunity, and management costs",
  ],
};

const Benefits: FC = () => {
  return (
    <section className="bg-white py-15 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-3 md:mb-6 text-2xl md:text-5xl font-medium text-[#212121]">
              {content.title}
            </h2>
            <p className="mb-5 md:mb-8 text-sm md:text-xl text-[#212121]">
              {content.subtitle}
            </p>
            <ul className="space-y-3 md:space-y-6">
              {content.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start text-sm md:text-xl text-[#212121]"
                >
                  <span className="mr-3 mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-[#2684FF]"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Image
              src="/images/nguyen-cyberk.png"
              alt={content.title}
              width={583}
              height={414}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
