import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { GridPatternSpotlight } from "@/components/ui/grid-parttern-spotlight-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProjectDetailsSection } from "@/components/common/project-details-section";
import { CaseStudyDetails } from "@/components/common/case-study-details";

const OraclerPage: FC = () => {
  const projectDetails = {
    releasedDate: "February, 2023",
    clientName: "Oracler",
    featureUsage: "AI Trading Tool App, Referral System, Staking Assets",
    keyResults: ["Ease of use for developers", "Fast implementation"],
  };

  const caseStudyData = {
    mainImage: "/images/oracler-image.png",
    initialSections: [
      {
        title: "Collaboration Type: Dedicated Team",
        description: [],
      },
      {
        title: "Challenge",
        description: [
          "Ensuring reliability, security, and fast data updates for smart contracts, while preventing data manipulation attacks.",
        ],
      },
      {
        title: "Services Provided",
        description: [
          "While Oracler's mission is to bridge the gap between off-chain data and on-chain execution, our top priority during the collaboration was to ensure a reliable and secure launch of their decentralized oracle solution. We needed to deliver low-latency data feeds with high integrity—without compromising speed or scalability.",
          "We kicked off the partnership with deep-dive workshops to align on goals, understand Oracler's target ecosystem (DeFi, GameFi, and beyond), and define key technical requirements. Together, we mapped out the architecture that would enable seamless integration with smart contracts while guarding against common oracle vulnerabilities, such as data manipulation or delayed updates.",
          "Once the architecture was in place, we moved to development. The backend infrastructure was optimized for rapid data ingestion, validation, and on-chain publishing, while ensuring tamper-proof delivery. Our tech stack included Solidity for on-chain logic and a robust off-chain system powered by Node.js and TypeScript.",
        ],
      },
    ],
    detailsImage: "/images/oracler-image-2.png",
    finalSections: [
      {
        title: "Results & Achievements",
        description: [
          "Oracler has been successfully integrated with major DeFi projects, handling millions of data requests daily and raising the security standards for the blockchain ecosystem.",
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-[#212121]">
      <GridPatternSpotlight className="md:h-[747px]">
        <div className="container mx-auto relative flex h-full flex-col items-center justify-center px-4 max-md:mt-20 max-md:mb-10 md:pt-20">
          <div className="w-full max-w-4xl text-center">
            <Image
              src="/oracler-logo.svg"
              alt="Oracler Logo"
              width={122}
              height={38}
              className="mx-auto mb-6"
            />
            <h1 className="mb-6 text-2xl md:text-5xl font-normal leading-tight text-[#2684FF]">
              Revenue Increased!{" "}
              <span className="text-[#212121]">
                faster revenue ramp from earlier launch + user adoption
              </span>
            </h1>
            <p className="leading-tight mb-6 md:max-w-[1120px] mx-auto text-sm md:text-2xl font-extralight">
              Oracler is a decentralized oracle solution that connects off-chain
              data to smart contracts on the blockchain, ensuring authenticity
              and transparency for DeFi, GameFi, and other applications.
            </p>
            <Link href="#" target="_blank">
              <Button className="h-11 !px-6 text-sm md:text-base font-extralight group bg-[#2684FF] hover:text-black btn-discover">
                Visit website
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </div>
      </GridPatternSpotlight>

      <ProjectDetailsSection {...projectDetails} />
      <CaseStudyDetails {...caseStudyData} />
    </main>
  );
};

export default OraclerPage;
