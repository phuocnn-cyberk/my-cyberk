import { FC } from "react";

const processData = {
  title: "Our Process",
  description:
    "Cyberk is built for founders who can’t afford to wait. We deliver MVPs in less than 30 days, combining speed with quality and security.",
  steps: [
    {
      title: "01. UX/UI Design",
      description: "User-centric, modern interfaces tailored to your goals.",
    },
    {
      title: "02. Software Architecture",
      description: "Scalable, maintainable technical foundation.",
    },
    {
      title: "03. Coding",
      description: "Fast, high-quality feature development.",
    },
    {
      title: "04. Testing",
      description: "Ensuring stability and security before launch.",
    },
    {
      title: "05. Hypercare",
      description:
        "Post-launch monitoring and support for a successful go-live.",
    },
  ],
};

const ProcessStep = ({
  title,
  description,
  position,
  className,
}: {
  title: string;
  description: string;
  position: "top" | "bottom";
  className?: string;
}) => {
  return (
    <div className={`absolute ${className}`}>
      <div
        className={`flex w-66 flex-col ${
          position === "top" ? "items-start" : "items-start"
        }`}
      >
        {position === "bottom" && (
          <div className="text-left">
            <h3 className="text-2xl font-normal text-[#212121]">{title}</h3>
            <p className="mt-2 text-base text-[#212121] leading-tight max-w-[223px]">
              {description}
            </p>
          </div>
        )}
        <div className="relative group flex h-10 w-10 items-center justify-center -translate-x-[2.5rem]">
          <div className="absolute h-full w-full rounded-full bg-[#2684FF]/20 transition-transform duration-300 ease-in-out group-hover:scale-150" />
          <div className="h-5 w-5 rounded-full bg-[#2684FF] transition-transform duration-300 ease-in-out group-hover:scale-125" />
          <div
            className={`absolute w-px border-l border-dashed border-[#BEBEBE] ${
              position === "top" ? "top-full h-45" : "bottom-full h-45"
            }`}
          />
        </div>
        {position === "top" && (
          <div className="text-left">
            <h3 className="text-2xl font-normal text-[#212121]">{title}</h3>
            <p className="mt-2 text-base text-[#212121] leading-tight max-w-[223px]">
              {description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const OurProcess: FC = () => {
  return (
    <section className="py-24 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-5xl font-medium text-[#212121]">
            {processData.title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-[#212121]">
            {processData.description}
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="relative mx-auto mt-12 hidden h-100 md:block">
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 border-t border-dashed border-[#BEBEBE]"></div>
          <ProcessStep
            title={processData.steps[0].title}
            description={processData.steps[0].description}
            position="top"
            className="left-[10%] top-[-1rem]"
          />
          <ProcessStep
            title={processData.steps[2].title}
            description={processData.steps[2].description}
            position="top"
            className="left-1/2 top-[-1rem] -translate-x-1/2"
          />
          <ProcessStep
            title={processData.steps[4].title}
            description={processData.steps[4].description}
            position="top"
            className="right-[10%] top-[-1rem] translate-x-1/2"
          />

          <ProcessStep
            title={processData.steps[1].title}
            description={processData.steps[1].description}
            position="bottom"
            className="left-[30%] bottom-[-1rem] -translate-x-1/2"
          />
          <ProcessStep
            title={processData.steps[3].title}
            description={processData.steps[3].description}
            position="bottom"
            className="right-[30%] bottom-[-1rem] translate-x-1/2"
          />
        </div>

        {/* Mobile View */}
        <div className="mt-16 space-y-12 md:hidden">
          {processData.steps.map((step, index) => (
            <div key={index} className="relative pl-8">
              <div className="absolute left-[-1px] top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-500/20">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
              </div>
              {index < processData.steps.length - 1 && (
                <div className="absolute left-[9px] top-6 h-full w-px border-l border-dashed border-[#BEBEBE]"></div>
              )}
              <h3 className="text-2xl font-normal text-[#212121]">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
