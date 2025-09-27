import { FC } from "react";
import { ServiceCards } from "./components/service-cards";

export const CyberkSolutionSection: FC = () => {
  return (
    <section className="bg-[url('/images/cyberk-solution-bg.png')] bg-cover bg-center py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-medium text-black mb-4">
            Cyberk Solutions
          </h2>
          <p className="text-base md:text-xl text-[#292929] font-light">
            Cyberk is built for founders who can’t afford to wait. We deliver
            MVPs in less than 30 days, combining speed with quality and
            security.
          </p>
        </div>
        <ServiceCards />
      </div>
    </section>
  );
};
