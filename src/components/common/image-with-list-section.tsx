import Image from "next/image";
import { FC } from "react";

interface ImageWithListSectionProps {
  title: string;
  subtitle: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
}

export const ImageWithListSection: FC<ImageWithListSectionProps> = ({
  title,
  subtitle,
  items,
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
      <p className="mb-5 md:mb-8 text-sm md:text-xl text-[#212121]">
        {subtitle}
      </p>
      <ul className="space-y-3 md:space-y-6">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start text-sm md:text-xl text-[#212121]"
          >
            <span className="mr-3 mt-1 block h-2 w-2 flex-shrink-0 rounded-full bg-[#2684FF]"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
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
