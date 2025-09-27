import Image from "next/image";
import { FC } from "react";

const content = {
  title: "Is This Right for You?",
  subtitle: "This service is ideal for founders, startups, and businesses who:",
  benefits: [
    "Need to validate a new product idea quickly and cost-effectively.",
    "Want to launch an MVP in less than 30 days to attract users or investors.",
    "Value speed, transparency, and technical excellence.",
    "Are looking to minimize risk and avoid over-investing before market validation.",
  ],
};

const IsThisRightForYou: FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <Image
              src="/images/brian-cyberk-1.png"
              alt="Is This Right for You?"
              width={567}
              height={433}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="mb-6 text-5xl font-medium text-[#212121]">
              {content.title}
            </h2>
            <p className="mb-8 text-xl text-[#212121]">{content.subtitle}</p>
            <ul className="space-y-6">
              {content.benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-start text-xl text-[#212121]"
                >
                  <span className="mr-3 mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-[#2684FF]"></span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsThisRightForYou;
