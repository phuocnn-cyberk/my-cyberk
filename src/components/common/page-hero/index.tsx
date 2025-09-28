import { FC, ReactNode } from "react";
import Image from "next/image";
import { ContactButton } from "@/components/common/contact-button";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  title: string;
  heading: ReactNode;
  description: ReactNode;
  button?: {
    text?: string;
    className?: string;
  };
  image: {
    src: string;
    alt: string;
  };
  sectionClassName?: string;
}

export const PageHero: FC<PageHeroProps> = ({
  title,
  heading,
  description,
  button,
  image,
  sectionClassName,
}) => {
  return (
    <section className={cn("bg-white/80", sectionClassName)}>
      <div className="container mx-auto px-4 py-20 md:py-[175px]">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 md:gap-[60px]">
          <div>
            <h1 className="text-xl md:text-2xl font-normal text-[#2684FF] mb-4">
              {title}
            </h1>
            <h2 className="text-2xl md:text-5xl font-normal text-black mb-4 md:mb-8">
              {heading}
            </h2>
            <p className="text-sm md:text-2xl font-extralight text-[#212121] mb-4 md:mb-8 leading-relaxed">
              {description}
            </p>
            {button && (
              <ContactButton text={button.text} className={button.className} />
            )}
          </div>
          <div className="relative aspect-auto w-[340px] h-[380px] rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={340}
              height={380}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
