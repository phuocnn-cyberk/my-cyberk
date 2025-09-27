import { FC } from "react";
import { Card, CardContent } from "@/components/ui/card";

const processData = {
  eyebrow: "Our Process",
  title: "Cyberk is built for founders who can't afford to wait.",
  description:
    "Our journey begins with a deep dive into your vision. We deliver MVPs in less than 30 days, combining speed with quality and security.",
  steps: [
    {
      title: "MVP Definition Workshop",
      description: null,
    },
    {
      title: "Rapid & Transparent Development",
      description:
        "Our team focuses on building the core feature with speed and quality. You’ll get regular demos and updates as the agent takes shape.",
    },
    {
      title: "Controlled Deployment",
      description:
        "We deploy the agent in a test environment, using real data to measure performance and gather feedback.",
    },
  ],
};

const OurProcess: FC = () => {
  return (
    <section className="bg-[#FAFAFA] py-15 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-start gap-10 md:gap-18 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="mb-6 text-base md:text-lg font-medium text-[#2684FF]">
              {processData.eyebrow}
            </p>
            <h2 className="mb-6 text-2xl md:text-5xl font-medium text-[#212121] leading-tight">
              {processData.title}
            </h2>
            <p className="text-sm md:text-base text-[#212121]">
              {processData.description}
            </p>
          </div>
          <div className="md:col-span-6 space-y-6">
            <Card className="rounded-2xl shadow-lg border-none">
              <CardContent className="p-0 pt-10">
                <div className="flex justify-between items-start px-6">
                  <h3 className="text-base md:text-xl font-medium text-[#212121]">
                    {processData.steps[0].title}
                  </h3>
                  <div className="text-2xl md:text-[40px] font-semibold text-[#2684FF]">
                    01
                  </div>
                </div>
                <div className="flex justify-between items-start overflow-hidden rounded-2xl pt-6 px-6 min-h-[180px] md:min-h-[240px] shadow-[0px_4px_4px_0px_#3535351a,4px_0px_4px_0px_#0000001a] backdrop-blur-[20px]">
                  <div>
                    <h3 className="text-base md:text-xl font-medium text-[#212121] max-w-[180px] md:max-w-[300px]">
                      {processData.steps[1].title}
                    </h3>
                    {processData.steps[1].description && (
                      <p className=" mt-3 md:mt-6 text-xs md:text-base text-[#232323] max-w-[384px]">
                        {processData.steps[1].description}
                      </p>
                    )}
                  </div>
                  <div className="text-2xl md:text-[40px] font-semibold text-[#2684FF]">
                    02
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-2xl shadow-lg border-none">
              <CardContent className="p-6 flex justify-between items-start min-h-[180px] md:min-h-[300px]">
                <div>
                  <h3 className="text-base md:text-xl font-medium text-[#212121]">
                    {processData.steps[2].title}
                  </h3>
                  {processData.steps[2].description && (
                    <p className="mt-2 text-xs md:text-base text-[#232323] max-w-[384px]">
                      {processData.steps[2].description}
                    </p>
                  )}
                </div>
                <div className="text-2xl md:text-[40px] font-semibold text-[#2684FF]">
                  03
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
