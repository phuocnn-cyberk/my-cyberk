import { FC } from "react";
import Image from "next/image";

const contractTypes = [
  "Upgradeable Smart Contract",
  "Smart Account",
  "Staking Contract",
  "DAOs Contract",
  "NFT Contracts",
  "Oracles & Data Feeds",
  "ERC-20 & ERC-721",
  "Layer 2 & Scaling Solutions",
];

const TypesOfSmartContracts: FC = () => {
  return (
    <section className="py-25 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left Column */}
          <div className="md:col-span-7">
            <Image
              src="/smart-contracts.svg"
              alt="Smart Contracts Icon"
              width={64}
              height={64}
              className="mb-6 md:mb-15"
            />
            <h2 className="text-2xl md:text-5xl text-[#212121] mb-4">
              Types of Smart Contracts
            </h2>
            <p className="text-base md:text-xl text-[#212121]">
              Our team brings deep expertise in a wide range of smart contracts,
              balancing technical accuracy with practical needs — from basic
              token logic to more complex DeFi use cases.
            </p>
          </div>

          {/* Right Column */}
          <div className="md:col-span-5 relative">
            <div className="max-h-80 overflow-y-auto pr-4 no-scrollbar">
              <div className="flex flex-col">
                {contractTypes.map((item, index) => (
                  <h3
                    key={index}
                    className="text-xl md:text-2xl font-light text-black pb-6"
                  >
                    {item}
                  </h3>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypesOfSmartContracts;
