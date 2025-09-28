import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const SERVICES_DATA = [
  {
    title: "MVP Development",
    description:
      "Turn your idea into a real product in less than 30 days. Our service helps you validate your concept quickly, reduce time-to-market, and minimize wasted investment.",
    path: "/services/mvp-development",
  },
  {
    title: "Smart Contract Development",
    description:
      "Get secure, reliable, and upgradable smart contracts for any major blockchain. We solve the complexity by providing expert consulting, design, and deployment.",
    path: "/services/smart-contract-development",
  },
  {
    title: "Dedicated Lab",
    description:
      "We dig deep to understand your goals, challenge assumptions, and test feasibility. If an idea doesn’t make sense, we’ll advise against building it.",
    path: "#",
  },
  {
    title: "MVP Agent Development",
    description:
      "We dig deep to understand your goals, challenge assumptions, and test feasibility. If an idea doesn’t make sense, we’ll advise against building it.",
    path: "/services/mvp-agent-development",
  },
];

export const ServiceCards: FC = () => {
  return (
    <div className="md:pt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES_DATA.map((service) => (
          <Link
            href={service.path}
            key={service.title}
            className="group block h-full"
          >
            <div className="flex h-full flex-col rounded-lg bg-white p-5 shadow-[0px_4px_4px_0px_#00000040] transition-all duration-300 lg:group-hover:-translate-y-10">
              <div className="h-5 md:h-[105px]">
                <h3 className="text-lg font-medium text-[#212121] md:text-2xl">
                  {service.title}
                </h3>
              </div>
              <p className="mt-5 text-sm font-normal text-[#828282] md:text-base">
                {service.description}
              </p>
              <div className="mt-auto pt-6">
                <div className="inline-flex items-center gap-x-2 rounded-lg bg-[#2684FF] px-4 py-2 text-sm font-normal text-white transition-all duration-300 hover:bg-[#2684FF]/90 md:invisible md:opacity-0 group-hover:visible group-hover:opacity-100">
                  <span>Learn More</span>
                  <ArrowRight size={12} />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
