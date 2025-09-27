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
      <section className="container mx-auto px-4 py-[175px]">
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-[60px]">
          <div>
            <h1 className="text-2xl font-medium text-blue-500 mb-6">
              About Cyberk
            </h1>
            <h2 className="text-5xl font-medium text-[#212121] mb-6">
              Fast, Reliable Blockchain Development Service
            </h2>
            <p className="text-2xl font-light text-[#212121] mb-10 leading-relaxed">
              Discover Cyberk’s story — a Web3-focused tech studio built by
              founders, for founders. We deliver MVPs in under 30 days, helping
              startups launch blockchain products fast with trust, speed, and
              excellence.
            </p>
            <ContactButton className="h-11 px-8 text-base" />
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
      </section>
      <OurStorySection />
      <WhyChooseUsSection />
      <OurVisionSection />
      <OurCoreValuesSection />
      <HowWeWorkSection />
    </main>
  );
};

export default AboutUsPage;
