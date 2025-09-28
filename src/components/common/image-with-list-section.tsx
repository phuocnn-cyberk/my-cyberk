import Image from "next/image";
import { FC } from "react";

interface Section {
  title: string;
  items: string[];
}

interface ImageWithListSectionProps {
  title: string;
  subtitle?: string;
  items?: string[];
  sections?: Section[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export const ImageWithListSection: FC<ImageWithListSectionProps> = ({
  title,
  subtitle,
  items,
  sections,
  imageSrc,
  imageAlt,
  imagePosition = "left",
}) => {
  const imageColumn = (
    <div>
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={567}
        height={433}
        className="rounded-lg shadow-lg w-full h-full object-cover"
      />
    </div>
  );

  const textColumn = (
    <div>
      <h2 className="mb-3 md:mb-6 text-2xl md:text-5xl font-medium text-[#212121]">
        {title}
      </h2>
      {subtitle && (
        <p className="mb-5 md:mb-8 text-sm md:text-xl text-[#212121]">
          {subtitle}
        </p>
      )}
      {items && (
        <ul className="space-y-3 md:space-y-6">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-start text-sm md:text-xl text-[#5a5a5a]"
            >
              <span className="mr-3 mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#212121]"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
      {sections && (
        <div className="space-y-5 md:space-y-8">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-2 text-lg md:text-xl font-semibold text-[#212121]">
                {section.title}
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {section.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-sm md:text-xl text-[#5a5a5a]"
                  >
                    <span className="mr-3 mt-2 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#212121]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <section className="bg-white py-15 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {imagePosition === "left" ? (
            <>
              {imageColumn}
              {textColumn}
            </>
          ) : (
            <>
              {textColumn}
              {imageColumn}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
