import { FC } from "react";
import Image from "next/image";
import { ContactButton } from "@/components/common/contact-button";
import { OurStorySection } from "@/components/our-story";
import { WhyChooseUsSection } from "@/components/why-choose-us";
import { OurVisionSection } from "@/components/our-vision";
import { OurCoreValuesSection } from "@/components/our-core-values";
import { HowWeWorkSection } from "@/components/how-we-work";

const AboutUsPage: FC = () => {
  return (
    <main className="text-black">
      <div className="md:bg-[url('/images/cyberk-bg.png')] bg-cover bg-center">
        <section className="bg-white/80">
          <div className="container mx-auto px-4 py-20 md:py-[175px]">
            <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 md:gap-[60px]">
              <div>
                <h1 className="text-xl md:text-2xl font-medium text-[#2684FF] mb-4">
                  About Cyberk
                </h1>
                <h2 className="text-2xl md:text-5xl font-medium text-black mb-4 md:mb-8">
                  Fast, Reliable Blockchain Development Service
                </h2>
                <p className="text-sm md:text-2xl font-light text-[#212121] mb-4 md:mb-8 leading-relaxed">
                  Discover Cyberk’s story — a Web3-focused tech studio built by
                  founders, for founders. We deliver MVPs in under 30 days,
                  helping startups launch blockchain products fast with trust,
                  speed, and excellence.
                </p>
                <ContactButton className="h-9 px-8 text-base font-normal" />
              </div>
              <div className="relative aspect-auto w-[340px] h-[380px] rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src="/images/felix-cyberk.png"
                  alt="Cyberk team working"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <OurStorySection />
      <WhyChooseUsSection />
      <OurVisionSection />
      <OurCoreValuesSection />
      <HowWeWorkSection />
    </main>
  );
};

export default AboutUsPage;
