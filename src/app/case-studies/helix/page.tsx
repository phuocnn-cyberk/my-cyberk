import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { GridPatternSpotlight } from "@/components/ui/grid-parttern-spotlight-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProjectDetailsSection } from "@/components/common/project-details-section";
import { CaseStudyDetails } from "@/components/common/case-study-details";

const HelixPage: FC = () => {
  const projectDetails = {
    releasedDate: "February, 2023",
    clientName: "Helix",
    featureUsage: "Real World Asset, Campaign, Referral",
    keyResults: ["Ease of use for developers", "Fast implementation"],
  };

  const caseStudyData = {
    mainImage: "/images/helix-image.png",
    initialSections: [
      {
        title: "Collaboration Type: MVP Development",
        description: [
          "Helix is a multi-strategy RWA (Real World Asset) DeFi platform powered by the USHD stablecoin, offering institutional-grade access to real-world assets, sustainable yield, and growth opportunities. Helix provides a full-stack, omni-chain ecosystem for seamless DeFi composability, backed by Tier 1 Banks and top-rated money market instruments, and recognized as an industry leader in RWA finance.",
        ],
      },
      {
        title: "Challenge",
        description: [
          "Delivering institutional-grade transparency, security, and risk protection for on-chain finance, while enabling seamless integration across DeFi protocols and ecosystems.",
        ],
      },
      {
        title: "Services Provided",
        description: [
          "The collaboration began with strategic workshops where our solution architect worked closely with Helix's product and compliance teams to define a modular architecture for institutional-grade RWA tokenization. We reviewed their vision and core technical specifications and mapped out key integration points across DeFi and off-chain infrastructure.",
          "After identifying challenges like on-chain transparency, multi-chain operability, and stablecoin risk management, we moved into rapid prototyping. Our development focused on secure, auditable smart contracts for tokenizing U.S. T-Bills, cross-chain messaging integration, and robust compliance logic. We structured delivery milestones around audit deployment, liquidity management, and oracle-based asset pricing.",
          "The result: a full-stack RWA DeFi platform that bridges Helix's off-chain financial infrastructure with on-chain smart contracts, achieving seamless composability and institutional-grade reliability.",
        ],
      },
    ],
    detailsImage: "/images/helix-image-2.png",
    finalSections: [
      {
        title: "Results & Achievements",
        description: [
          "Helix has facilitated over $500M in off-chain deal volume, closed 400+ deals with zero defaults, and is backed by leading fintech investors and partners.",
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
              src="/helix-logo.svg"
              alt="Helix Logo"
              width={122}
              height={38}
              className="mx-auto mb-6"
            />
            <h1 className="mb-6 text-2xl md:text-5xl font-medium leading-tight text-[#2684FF]">
              On-Time Delivery!{" "}
              <span className="text-[#212121]">
                95% of projects shipped on time and within scope.
              </span>
            </h1>
            <p className="leading-tight mb-6 md:max-w-[1120px] mx-auto text-sm md:text-2xl font-light">
              Helix is a multi-strategy RWA (Real World Asset) DeFi platform
              powered by the USHD stablecoin, offering institutional-grade
              access to real-world assets, sustainable yield, and growth
              opportunities.
            </p>
            <Link href="#" target="_blank">
              <Button className="h-11 !px-6 text-sm md:text-base font-normal group bg-[#2684FF] hover:text-black btn-discover">
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

export default HelixPage;
