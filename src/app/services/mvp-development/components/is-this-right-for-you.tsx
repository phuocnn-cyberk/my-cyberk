import { FC } from "react";
import { ImageWithListSection } from "@/components/common/image-with-list-section";

const content = {
  title: "Is This Right for You?",
  subtitle: "This service is ideal for founders, startups, and businesses who:",
  items: [
    "Need to validate a new product idea quickly and cost-effectively.",
    "Want to launch an MVP in less than 30 days to attract users or investors.",
    "Value speed, transparency, and technical excellence.",
    "Are looking to minimize risk and avoid over-investing before market validation.",
  ],
  imageSrc: "/images/brian-cyberk-1.png",
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
