import { FC } from "react";
import { ImageWithListSection } from "@/components/common/image-with-list-section";

const content = {
  title: "Is This Right for You?",
  subtitle: "Choose this service if you are:",
  items: [
    "Innovators and businesses exploring AI-powered automation or “AI employee” concepts.",
    "Teams wanting to quickly validate an AI agent idea with minimal risk and investment.",
    "Companies seeking actionable data before committing to full-scale AI development.",
    "Anyone looking to leverage AI for real business problems, fast.",
  ],
  imageSrc: "/images/kallo-cyberk.png",
};

const IsThisRightForYou: FC = () => {
  return (
    <ImageWithListSection
      title={content.title}
      subtitle={content.subtitle}
      items={content.items}
      imageSrc={content.imageSrc}
      imageAlt={content.title}
      imagePosition="left"
    />
  );
};

export default IsThisRightForYou;
