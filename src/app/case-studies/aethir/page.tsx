import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { GridPatternSpotlight } from "@/components/ui/grid-parttern-spotlight-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ProjectDetailsSection } from "@/components/common/project-details-section";
import { CaseStudyDetails } from "@/components/common/case-study-details";

const AethirPage: FC = () => {
  const projectDetails = {
    releasedDate: "February, 2024",
    clientName: "Aethir",
    featureUsage:
      "Analytics, Autocomplete, Filters & Facets, Instant Search, Search API",
    keyResults: ["Ease of use for developers", "Fast implementation"],
  };

  const caseStudyData = {
    mainImage: "/images/aethir-image.png",
    initialSections: [
      {
        title: "Collaboration Type: MVP Development",
        description: [
          "Aethir is a decentralized cloud computing platform that aggregates GPU power from enterprises, data centers, and individuals worldwide to provide GPU-as-a-Service for AI, gaming, and high-performance computing applications. Aethir reduces costs, increases scalability, and eliminates the centralization risks of traditional cloud services.",
        ],
      },
      {
        title: "Challenge",
        description: [
          "Aethir had to solve the problem of high GPU costs, limited scalability, and centralization risks when deploying large-scale AI.",
        ],
      },
      {
        title: "Services Provided",
        description: [
          "Our collaboration with Aethir began with a focused discovery phase, where we worked with their team to define the MVP scope. Together, we aligned on key goals: lowering GPU costs, enabling large-scale scalability, and overcoming the risks of centralized infrastructure.",
          "We translated these into technical requirements and mapped out potential bottlenecks and risks. Mock-ups and system flows were created and reviewed with Aethir’s engineers to ensure alignment.",
          "We set clear milestones and ran fast sprints to deliver a lean, high-impact MVP. Core features included decentralized GPU aggregation, task distribution, and seamless onboarding to Aethir’s GPU-as-a-Service platform.",
        ],
      },
    ],
    detailsImage: "/images/aethir-image-2.png",
    finalSections: [
      {
        title: "Results & Achievements",
        description: [
          "Aethir enabled partners like OpenLedger to save up to 99% in costs, run thousands of AI models on a single GPU, and scale their global GPU network in just two weeks.",
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
              src="/aethir-logo.svg"
              alt="Aethir Logo"
              width={181}
              height={56}
              className="mx-auto mb-6 max-md:w-[129px] max-md:h-[40px]"
            />
            <h1 className="mb-6 text-2xl md:text-5xl font-normal leading-tight text-[#2684FF]">
              Time Saved!{" "}
              <span className="text-[#212121]">
                Up to 6 months faster MVP delivery vs. in-house
              </span>
            </h1>
            <p className="leading-tight mb-6 md:max-w-[1120px] mx-auto text-sm md:text-2xl font-extralight">
              Aethir is a decentralized cloud computing platform that aggregates
              GPU power from enterprises, data centers, and individuals
              worldwide to provide GPU-as-a-Service for AI, gaming, and
              high-performance computing applications. Aethir reduces costs,
              increases scalability, and eliminates the centralization risks of
              traditional cloud services.
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

export default AethirPage;
