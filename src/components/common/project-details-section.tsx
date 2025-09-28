import { FC } from "react";

interface ProjectDetailsSectionProps {
  releasedDate: string;
  clientName: string;
  featureUsage: string;
  keyResults: string[];
}

export const ProjectDetailsSection: FC<ProjectDetailsSectionProps> = ({
  releasedDate,
  clientName,
  featureUsage,
  keyResults,
}) => {
  return (
    <section className="bg-[#F6FAFF] py-10">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-3 md:grid-cols-12 gap-y-8 gap-x-4 md:gap-8">
          <div className="order-1 md:col-span-2">
            <h4 className="text-xs md:text-sm font-normal text-[#2684FF] mb-3">
              RELEASED
            </h4>
            <p className="text-sm md:text-base text-[#212121]">
              {releasedDate}
            </p>
          </div>
          <div className="order-3 md:order-2 md:col-span-2">
            <h4 className="text-xs md:text-sm font-normal text-[#2684FF] mb-3">
              CLIENT
            </h4>
            <p className="text-sm md:text-base text-[#212121]">{clientName}</p>
          </div>
          <div className="order-4 col-span-2 md:col-span-4">
            <h4 className="text-xs md:text-sm font-normal text-[#2684FF] mb-3">
              FEATURE USAGE
            </h4>
            <p className="text-sm md:text-base text-[#212121]">
              {featureUsage}
            </p>
          </div>
          <div className="order-2 col-span-2 md:order-4 md:col-span-4">
            <h4 className="text-xs md:text-sm font-normal text-[#2684FF] mb-3">
              KEY RESULTS
            </h4>
            <ul className="list-disc list-inside text-sm md:text-base text-[#212121] space-y-1">
              {keyResults.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
