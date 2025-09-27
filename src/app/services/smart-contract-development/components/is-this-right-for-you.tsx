import { FC } from "react";
import { ImageWithListSection } from "@/components/common/image-with-list-section";

const content = {
  title: "Is This Right for You?",
  subtitle: "Choose this service if you are:",
  items: [
    "A Web3 startup, DeFi project, or enterprise needing secure, reliable smart contracts.",
    "Launching a new blockchain product and want expert guidance from design to deployment.",
    "Concerned about security, upgradability, and real-world readiness of your contracts.",
  ],
  imageSrc: "/images/meeting.png",
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
