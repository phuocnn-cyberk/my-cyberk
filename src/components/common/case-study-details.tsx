import Image from "next/image";
import { FC } from "react";

interface SectionContent {
  title: string;
  description: string[];
}

interface CaseStudyDetailsProps {
  mainImage: string;
  initialSections: SectionContent[];
  detailsImage: string;
  finalSections: SectionContent[];
}

export const CaseStudyDetails: FC<CaseStudyDetailsProps> = ({
  mainImage,
  initialSections,
  detailsImage,
  finalSections,
}) => {
  return (
    <section className="bg-white py-10 md:py-20">
      <div className="container mx-auto px-5">
        <Image
          src={mainImage}
          alt="Case Study Main Image"
          width={910}
          height={523}
          className="block w-full max-w-[910px] h-auto mx-auto mb-9 rounded-2xl"
        />
        <div className="max-w-[883px] mx-auto space-y-10 md:space-y-16">
          {initialSections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl md:text-[36px] font-bold mb-3 md:mb-4 text-[#212121]">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.description.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-sm text-[#232325] md:text-xl leading-tight"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Image
          src={detailsImage}
          alt="Case Study Details Image"
          width={910}
          height={523}
          className="block w-full max-w-[910px] h-auto mx-auto my-9 rounded-2xl overflow-hidden"
        />
        <div className="max-w-[883px] mx-auto">
          {finalSections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl md:text-[36px] font-bold mb-3 md:mb-4 text-[#212121]">
                {section.title}
              </h2>
              <div className="space-y-4">
                {section.description.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="text-sm text-[#232325] md:text-xl leading-tight"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
