import Image from "next/image";
import { FC } from "react";

interface VisionImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  containerClassName?: string;
}

const VisionImage: FC<VisionImageProps> = ({
  src,
  alt,
  width,
  height,
  containerClassName,
}) => (
  <div
    className={`rounded-lg overflow-hidden aspect-[${width}/${height}] ${containerClassName}`}
  >
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="w-full h-full object-cover"
    />
  </div>
);

export const OurVisionSection: FC = () => {
  return (
    <section className="bg-[#FAFAFA] py-15 md:py-24">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-16 mb-5 md:mb-20">
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-5xl font-medium text-black mb-2 md:mb-16">
              Our Vision
            </h2>
            <div className="space-y-2 md:space-y-6">
              <p className="text-sm md:text-2xl text-[#212121] font-normal">
                At Cyberk, our mission is simple:
              </p>
              <div className="bg-[#2684FF] text-white text-base md:text-xl inline-block px-1 py-2">
                “Creating Breakthroughs”.
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6 text-base md:text-lg text-[#212121] font-light leading-relaxed">
            <p>
              We exist to help founders and companies create real breakthroughs
              in Web3 and blockchain. In today’s VUCA world (volatility,
              uncertainty, complexity, ambiguity), speed is everything. The
              difference between leading the market and missing the moment often
              comes down to how fast you can launch.
            </p>
            <p>
              When time-to-market matters, Cyberk delivers. We’re not just
              developers — we’re trusted Web3 experts, staying ahead of
              blockchain trends and technologies. With deep technical expertise
              and industry knowledge, we help our clients build the right
              solutions and succeed in the digital economy.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-2 md:grid md:grid-cols-5 md:gap-4 md:p-10">
          <VisionImage
            src="/images/kanz-cyberk.png"
            alt="Vision Image 1"
            width={435}
            height={542}
            containerClassName="h-[293px] w-[221px] md:col-span-2 md:h-[542px] md:w-full"
          />
          <div className="flex flex-col gap-2 md:col-span-3 md:gap-4">
            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
              <VisionImage
                src="/images/our-vision-2.png"
                alt="Vision Image 2"
                width={200}
                height={264}
                containerClassName="h-[68px] w-[106px] md:h-[264px] md:w-[31.59%]"
              />
              <VisionImage
                src="/images/our-vision-3.png"
                alt="Vision Image 3"
                width={433}
                height={264}
                containerClassName="h-[68px] w-[106px] md:h-[264px] md:w-[68.41%]"
              />
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
              <VisionImage
                src="/images/our-vision-4.png"
                alt="Vision Image 4"
                width={433}
                height={264}
                containerClassName="h-[68px] w-[106px] md:h-[264px] md:w-[68.41%]"
              />
              <VisionImage
                src="/images/our-vision-5.png"
                alt="Vision Image 5"
                width={200}
                height={264}
                containerClassName="h-[68px] w-[106px] md:h-[264px] md:w-[31.59%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
