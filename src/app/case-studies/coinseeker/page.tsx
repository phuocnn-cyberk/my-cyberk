import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { GridPatternSpotlight } from "@/components/ui/grid-parttern-spotlight-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProjectDetailsSection } from "@/components/common/project-details-section";
import { CaseStudyDetails } from "@/components/common/case-study-details";

const CoinseekerPage: FC = () => {
  const projectDetails = {
    releasedDate: "February, 2023",
    clientName: "Coinseeker",
    featureUsage:
      "Analytics, Autocomplete, Tracking Data, Instant Search, Search API",
    keyResults: ["Ease of use for developers", "Fast implementation"],
  };

  const caseStudyData = {
    mainImage: "/images/coinseeker-image.png",
    initialSections: [
      {
        title: "Collaboration Type: Dedicated Team",
        description: [
          "Coinseeker is a blockchain data analytics platform that helps users discover new investment opportunities, track market trends, and manage digital asset portfolios intelligently.",
        ],
      },
      {
        title: "Challenge",
        description: [
          "Building a real-time blockchain data analytics system, handling large data volumes, and ensuring security and transparency for users.",
        ],
      },
      {
        title: "Services Provided",
        description: [
          "Coinseeker set out to build an advanced blockchain data analytics platform that could surface alpha transparently, track real-time market trends, and help users manage their digital asset portfolios intelligently. The company faced several core challenges: handling high-throughput data pipelines, maximizing performance at scale, and ensuring platform security and transparency for end users.",
          "Coinseeker initially struggled to find engineers with the right mix of blockchain expertise and product thinking — a challenge common in a market short on experienced Web3 developers. Cyberk filled this gap with a dedicated team that hit the ground running and integrated seamlessly into Coinseeker’s workflow.",
        ],
      },
    ],
    detailsImage: "/images/coinseeker-image-2.png",
    finalSections: [
      {
        title: "Results & Achievements",
        description: [
          "Coinseeker was acquired by Titan Lab for $30M in January 2025, becoming one of the most notable M&A deals in blockchain analytics.",
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
              src="/coinseeker-logo.svg"
              alt="Coinseeker Logo"
              width={181}
              height={32}
              className="mx-auto mb-6"
            />
            <h1 className="mb-6 text-2xl md:text-5xl font-medium leading-tight text-[#2684FF]">
              Revenue Increased!{" "}
              <span className="text-[#212121]">
                5000% faster revenue ramp from earlier launch + user adoption
              </span>
            </h1>
            <p className="leading-tight mb-6 md:max-w-[1120px] mx-auto text-sm md:text-2xl font-light">
              Coinseeker is a blockchain data analytics platform that helps
              users discover new investment opportunities, track market trends,
              and manage digital asset portfolios intelligently.
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

export default CoinseekerPage;
