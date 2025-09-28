import { FC } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const FEATURES_DATA = [
  {
    icon: "/superior-speed-icon.svg",
    title: "Superior Speed",
    description:
      "We deliver MVPs in less than 30 days, giving our clients a competitive edge in the fast-moving Web3 world. Speed is our standard — because in blockchain, every day matters.",
  },
  {
    icon: "/true-partnership-icon.svg",
    title: "True Partnership",
    description:
      "We’re more than a service provider — we act as your co-founder and CTO. Every project is personal to us. We invest passion, expertise, and commitment into your success.",
  },
  {
    icon: "/lifecycle-excelence-icon.svg",
    title: "Lifecycle Excellence",
    description:
      "We cover the entire product lifecycle — from concept to launch and beyond. That’s why clients return with bigger projects, confident we’ll deliver world-class blockchain solutions.",
  },
  {
    icon: "/continuous-adaptation-icon.svg",
    title: "Continuous Adaptation",
    description:
      "The Web3 world changes fast. We constantly update our blockchain knowledge to stay ahead of new trends, best practices, and technologies — keeping you ahead of the curve too.",
  },
];

interface FeatureCardProps {
  feature: (typeof FEATURES_DATA)[0];
}

const FeatureCard: FC<FeatureCardProps> = ({ feature }) => (
  <Card className="rounded-2xl shadow-[0px_4px_4px_0px_#3535351A] h-full border-none p-0">
    <CardContent className="p-6 md:pt-0">
      <div className="relative w-16 h-16 mb-6">
        <Image
          src={feature.icon}
          alt={`${feature.title} icon`}
          width={64}
          height={64}
          className="w-full h-full"
        />
      </div>
      <h3 className="text-base md:text-2xl font-normal text-black mb-4">
        {feature.title}
      </h3>
      <p className="text-xs md:text-sm text-[#212121] font-extralight leading-relaxed">
        {feature.description}
      </p>
    </CardContent>
  </Card>
);

export const WhyChooseUsSection: FC = () => {
  return (
    <section className="bg-white py-15 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-6 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-normal text-black mb-4 md:mb-6">
            Why Choose Us
          </h2>
          <p className="text-sm md:text-xl text-[#212121] font-extralight">
            Cyberk is a trusted Web3 development partner, delivering speed,
            reliability, and innovation to help startups always lead the market
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURES_DATA.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
