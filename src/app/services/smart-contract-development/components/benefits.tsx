import { FC } from "react";
import { ImageWithListSection } from "@/components/common/image-with-list-section";

const content = {
  title: "Benefits",
  subtitle:
    "Partner with us for reliable, secure, and future-proof smart contracts.",
  items: [
    "Security & Reliability: Rigorous testing and auditing to protect your assets.",
    "Cost Efficiency: Optimized contracts to minimize gas fees.",
    "Upgradability: Flexible architecture for future enhancements.",
    "Expert Guidance: Deep blockchain expertise to avoid common pitfalls.",
  ],
  imageSrc: "/images/brian-cyberk.png",
};

const Benefits: FC = () => {
  return (
    <ImageWithListSection
      title={content.title}
      subtitle={content.subtitle}
      items={content.items}
      imageSrc={content.imageSrc}
      imageAlt={content.title}
      imagePosition="right"
    />
  );
};

export default Benefits;
