import { FC } from "react";
import { OurStorySection } from "@/components/our-story";
import { WhyChooseUsSection } from "@/components/why-choose-us";
import { OurVisionSection } from "@/components/our-vision";
import { OurCoreValuesSection } from "@/components/our-core-values";
import { HowWeWorkSection } from "@/components/how-we-work";
import { PageHero } from "@/components/common/page-hero";

const AboutUsPage: FC = () => {
  return (
    <main className="text-black">
      <div className="md:bg-[url('/images/cyberk-bg.png')] bg-cover bg-center">
        <PageHero
          title="About Cyberk"
          heading="Fast, Reliable Blockchain Development Service"
          description="Discover Cyberk’s story — a Web3-focused tech studio built by founders, for founders. We deliver MVPs in under 30 days, helping startups launch blockchain products fast with trust, speed, and excellence."
          button={{
            className: "h-9 px-8 text-base font-normal",
          }}
          image={{
            src: "/images/felix-cyberk.png",
            alt: "Cyberk team working",
          }}
        />
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
