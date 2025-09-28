import { FC } from "react";
import { ImageWithListSection } from "@/components/common/image-with-list-section";

const content = {
  title: "Details",
  sections: [
    {
      title: "Languages",
      items: ["Solidity, Rust, Move, Haskell, Vyper, Cairo, etc."],
    },
    {
      title: "Supported Networks",
      items: [
        "Ethereum, BSC, Solana, Cardano, Polygon, Avalanche, Arbitrum, Optimism, Base, Near, Sui, Aptos, and more",
      ],
    },
    {
      title: "Goals",
      items: [
        "Secure, thoroughly tested, and easily upgradable contracts",
        "Full lifecycle support: consulting, design, development, testing, deployment, maintenance",
      ],
    },
  ],
  imageSrc: "/images/brian-cyberk.png",
};

const Details: FC = () => {
  return (
    <ImageWithListSection
      title={content.title}
      sections={content.sections}
      imageSrc={content.imageSrc}
      imageAlt={content.title}
      imagePosition="right"
    />
  );
};

export default Details;
