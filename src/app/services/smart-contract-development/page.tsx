import { FC } from "react";
import { ContactButton } from "@/components/common/contact-button";
import Image from "next/image";
import { GridPatternSpotlight } from "@/components/ui/grid-parttern-spotlight-card";
import IsThisRightForYou from "./components/is-this-right-for-you";
import Benefits from "./components/benefits";

const SmartContractDevelopmentPage: FC = () => {
  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <GridPatternSpotlight>
        <div className="container mx-auto relative flex min-h-screen items-center px-5 py-19">
          <div className="grid w-full grid-cols-1 items-center lg:grid-cols-12 gap-5 md:gap-0">
            <div className="lg:col-span-6">
              <h1 className="mb-4 md:mb-6 text-sm md:text-2xl font-bold text-[#2684FF]">
                Smart Contract Development
              </h1>
              <h2 className="mb-2 md:mb-6 text-2xl md:text-5xl font-medium leading-tight">
                Get secure, reliable, and upgradable smart contracts for any
                major blockchain.
              </h2>
              <p className="leading-tight mb-2 md:mb-6 md:max-w-[550px] text-sm md:text-xl font-light">
                We solve the complexity and risk of blockchain development by
                providing expert consulting, design, and deployment.
              </p>
              <p className="leading-tight mb-8 md:mb-10 md:max-w-[550px] text-sm md:text-xl font-light">
                Our service ensures your contracts are safe, cost-effective, and
                ready for real-world use—so you can focus on your product, not
                technical pitfalls.
              </p>
              <ContactButton
                text="CONTACT US"
                className="h-11 !px-6 text-sm md:text-base font-normal"
              />
            </div>
            <div className="flex justify-center lg:col-span-6">
              <Image
                src="/images/smart-contract-image.png"
                alt="Smart Contract Development"
                width={550}
                className="w-full h-full object-cover"
                height={550}
              />
            </div>
          </div>
        </div>
      </GridPatternSpotlight>
      <IsThisRightForYou />
      <Benefits />
    </main>
  );
};

export default SmartContractDevelopmentPage;
