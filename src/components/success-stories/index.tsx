import { FC } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const STORIES_DATA = [
  {
    logo: "asterix-logo.svg",
    metric: "Cost Efficiency",
    value: "30-40%",
    description:
      "compared to building an in-house team (recruitment + salaries + overhead).",
    image: "/images/asterix.png",
  },
  {
    logo: "coinseeker-logo.svg",
    metric: "Time Saved",
    value: "6 months",
    description: "faster MVP delivery vs. in-house.",
    image: "/images/coinseeker.png",
  },
  {
    logo: "aethir-logo.svg",
    metric: "Revenue Increased",
    value: "5000%",
    description: "faster revenue ramp from earlier launch + user adoption",
    image: "/images/aethir.png",
  },
  {
    logo: "helix-logo.svg",
    metric: "On-Time Delivery",
    value: "95%",
    description: "of projects shipped on time and within scope.",
    image: "/images/helix.png",
  },
  {
    logo: "mantle-logo.svg",
    metric: "Workflow",
    value: "30-40%",
    description: "faster workflow",
    image: "/images/mantle.png",
  },
  {
    logo: "asterix-logo.svg",
    metric: "Scalability - Ramp from",
    value: "3 to 12",
    description: "engineers in 2 days to match project needs.",
    image: "/images/asterix.png", // Reusing asterix as requested
  },
];

interface StoryCardProps {
  story: (typeof STORIES_DATA)[0];
}

const StoryCard: FC<StoryCardProps> = ({ story }) => (
  <Card className="bg-[#F6FAFF] border-none pb-0 rounded-2xl overflow-hidden">
    <CardContent className="text-center">
      <div className="relative h-8 mb-4">
        <Image
          src={`/${story.logo}`}
          alt={`${story.logo} logo`}
          layout="fill"
          objectFit="contain"
          objectPosition="center"
        />
      </div>
      <p className="text-xl text-black mb-2">{story.metric}</p>
      <p className="text-5xl font-medium text-[#2684FF] mb-4">{story.value}</p>
      <p className="text-base text-black/60 h-12">{story.description}</p>
    </CardContent>
    <div className="relative aspect-[4/3] w-full">
      <Image
        src={story.image}
        alt={`${story.logo} success story`}
        layout="fill"
        objectFit="cover"
      />
    </div>
  </Card>
);

export const SuccessStoriesSection: FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl font-medium text-black mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-black/80">
            Find out how Cyberk performs for some of the world’s most dynamic
            businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STORIES_DATA.map((story) => (
            <StoryCard key={story.logo + story.metric} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};
