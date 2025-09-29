import { FC } from "react";
import { ContainerScroll, CardSticky } from "@/components/ui/cards-stack";

const processData = {
  eyebrow: "Our Process",
  title: "Cyberk is built for founders who can't afford to wait.",
  description:
    "Our journey begins with a deep dive into your vision. We deliver MVPs in less than 30 days, combining speed with quality and security.",
  steps: [
    {
      id: "step-1",
      title: "MVP Definition Workshop",
      description:
        "We work with you to define the agent’s core task, title, and domain. This ensures we’re solving the right problem from the start.",
    },
    {
      id: "step-2",
      title: "Rapid & Transparent Development",
      description:
        "Our team focuses on building the core feature with speed and quality. You’ll get regular demos and updates as the agent takes shape.",
    },
    {
      id: "step-3",
      title: "Controlled Deployment",
      description:
        "We deploy the agent in a test environment, using real data to measure performance and gather feedback.",
    },
    {
      id: "step-4",
      title: "Review & Roadmap",
      description:
        "Together, we analyze the MVP’s results and create a clear, data-driven roadmap for future development and upgrades.",
    },
  ],
};

const OurProcess: FC = () => {
  return (
    <section className="bg-[#FAFAFA] py-15 md:py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-12">
          <div className="md:col-span-6 px-5">
            <p className="mb-6 text-base font-normal text-[#2684FF] md:text-lg">
              {processData.eyebrow}
            </p>
            <h2 className="mb-6 text-2xl font-normal leading-tight text-[#212121] md:text-5xl">
              {processData.title}
            </h2>
            <p className="text-sm text-[#212121] md:text-base font-light">
              {processData.description}
            </p>
          </div>
          <div className="md:col-span-6 h-[427px] md:h-[706px] overflow-y-auto overflow-x-hidden">
            <ContainerScroll className="space-y-4 px-5">
              {processData.steps.map((step, index) => (
                <CardSticky
                  key={step.id}
                  index={index}
                  className="flex flex-col rounded-lg bg-[#FFFFFF99] p-6 h-[180px] md:h-[300px] md:w-[588px] md:px-8 md:py-10"
                  style={{
                    boxShadow:
                      "0px 4px 4px 0px #3535351A, 4px 0px 4px 0px #0000001A",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-[384px]">
                      <h3 className="text-base font-semibold text-[#212121] md:text-xl">
                        {step.title}
                      </h3>
                      {step.description && (
                        <p className="mt-3 text-xs font-light text-[#232323] md:mt-6 md:text-base">
                          {step.description}
                        </p>
                      )}
                    </div>
                    <div className="text-2xl font-semibold text-[#2684FF] md:text-[40px]">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </CardSticky>
              ))}
            </ContainerScroll>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
