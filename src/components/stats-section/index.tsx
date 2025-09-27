import { FC } from "react";

const STATS_DATA = [
  {
    value: "5+ Years",
    description: "Experience in Blockchain\nDevelopment",
  },
  {
    value: "30 Days",
    description: "Guarantee MVP\nDelivery",
  },
  {
    value: "50+",
    description: "Blockchain Solutions\nDelivered",
  },
  {
    value: "$300M+",
    description: "In TLV for Smart\nContract Development",
  },
];

interface StatItemProps {
  value: string;
  description: string;
}

const StatItem: FC<StatItemProps> = ({ value, description }) => (
  <div className="text-center">
    <p className="text-xl md:text-5xl font-bold text-[#2172E6] mb-2">{value}</p>
    <p className="text-sm md:text-lg leading-tight text-[#212121] whitespace-pre-line">
      {description}
    </p>
  </div>
);

export const StatsSection: FC = () => {
  return (
    <div className="bg-[#F6FAFF] py-10 md:py-24">
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 md:gap-16">
          {STATS_DATA.map((stat) => (
            <StatItem key={stat.value} {...stat} />
          ))}
        </div>
      </section>
    </div>
  );
};
