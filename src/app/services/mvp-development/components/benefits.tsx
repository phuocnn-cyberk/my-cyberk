import { FC } from "react";
import { ImageWithListSection } from "@/components/common/image-with-list-section";

const content = {
  title: "Benefits",
  subtitle: "This service is ideal for founders, startups, and businesses who:",
  benefits: [
    "Rapid product launch (less than 30 days)",
    "Fixed, transparent pricing",
    "Flexible, adaptable solutions",
    "Save time, opportunity, and management costs",
  ],
  imageSrc: "/images/our-vision-2.png",
};

const Benefits: FC = () => {
  return (
    <ImageWithListSection
      title={content.title}
      subtitle={content.subtitle}
      items={content.benefits}
      imageSrc={content.imageSrc}
      imageAlt={content.title}
      imagePosition="right"
    />
  );
};

export default Benefits;
