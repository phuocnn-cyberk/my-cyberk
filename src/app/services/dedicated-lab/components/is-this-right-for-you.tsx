import { FC } from "react";
import { ImageWithListSection } from "@/components/common/image-with-list-section";

const content = {
  title: "Is This Right for You?",
  subtitle: "Choose this service if you are:",
  items: [
    "Companies need ongoing or large-scale Web3 product development.",
    "Businesses seeking a stable and long-term technical team that deeply understands their product and culture.",
    "Teams looking to reduce hiring risks and optimize operational costs.",
  ],
  imageSrc: "/images/meeting-image.png",
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
