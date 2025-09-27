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
    <section className="bg-[#FAFAFA] py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-21">
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-medium text-black mb-16">
              Our Vision
            </h2>
            <div className="space-y-6">
              <p className="text-2xl text-black/80">
                At Cyberk, our mission is simple:
              </p>
              <div className="bg-[#2684FF] text-white text-xl inline-block px-1 py-2">
                “Creating Breakthroughs”.
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-6 text-lg text-black/70 leading-relaxed">
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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          <VisionImage
            src="/images/our-vision-1.png"
            alt="Vision Image 1"
            width={416}
            height={541}
            containerClassName="lg:col-span-2"
          />
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div className="flex gap-4">
              <VisionImage
                src="/images/our-vision-2.png"
                alt="Vision Image 2"
                width={200}
                height={264}
                containerClassName="w-[31.59%]"
              />
              <VisionImage
                src="/images/our-vision-3.png"
                alt="Vision Image 3"
                width={433}
                height={264}
                containerClassName="w-[68.41%]"
              />
            </div>
            <div className="flex gap-4">
              <VisionImage
                src="/images/our-vision-4.png"
                alt="Vision Image 4"
                width={433}
                height={264}
                containerClassName="w-[68.41%]"
              />
              <VisionImage
                src="/images/our-vision-5.png"
                alt="Vision Image 5"
                width={200}
                height={264}
                containerClassName="w-[31.59%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
