import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { FC } from "react";

const SERVICES_DATA = [
  {
    title: "MVP Development",
    description:
      "Turn your idea into a real product in less than 30 days. Our service helps you validate your concept quickly, reduce time-to-market, and minimize wasted investment.",
    hasButton: true,
  },
  {
    title: "Smart Contract Development",
    description:
      "Get secure, reliable, and upgradable smart contracts for any major blockchain. We solve the complexity by providing expert consulting, design, and deployment.",
  },
  {
    title: "Dedicated Lab",
    description:
      "We dig deep to understand your goals, challenge assumptions, and test feasibility. If an idea doesn’t make sense, we’ll advise against building it.",
  },
  {
    title: "MVP Agent Development",
    description:
      "We dig deep to understand your goals, challenge assumptions, and test feasibility. If an idea doesn’t make sense, we’ll advise against building it.",
  },
];

export const ServiceCards: FC = () => {
  return (
    <div className="md:pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_DATA.map((service, index) => (
          <div
            key={service.title}
            className={cn(
              "bg-white rounded-lg p-5 flex flex-col shadow-[0px_4px_4px_0px_#00000040]",
              index === 0 && "relative lg:-top-10"
            )}
          >
            <div className="h-5 md:h-[105px]">
              <h3 className="text-lg md:text-2xl font-medium text-[#212121]">
                {service.title}
              </h3>
            </div>
            <p className="text-[#828282] text-sm md:text-base font-normal mt-5 md:max-w-[213px]">
              {service.description}
            </p>
            {service.hasButton && (
              <Button className="mt-6 bg-[#2684FF] hover:bg-[#2684FF]/90 w-fit !rounded-lg">
                <span className="text-sm text-white font-normal">
                  Learn More
                </span>{" "}
                <ArrowRight size={12} />
              </Button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
