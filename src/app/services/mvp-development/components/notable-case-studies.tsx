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
    metric: "Time Saved upto",
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
];

interface StoryCardProps {
  story: (typeof STORIES_DATA)[0];
}

const StoryCard: FC<StoryCardProps> = ({ story }) => (
  <Card className="bg-white border rounded-2xl overflow-hidden">
    <CardContent className="text-center p-6">
      <div className="relative h-12 mb-4">
        <Image
          src={`/${story.logo}`}
          alt={`${story.logo} logo`}
          width={347}
          height={240}
          className="w-full h-full object-contain"
        />
      </div>
      <p className="text-xl text-black mb-2">{story.metric}</p>
      <p className="text-5xl font-medium text-[#2684FF] mb-4">{story.value}</p>
      <p className="text-base md:text-xl text-black/60 h-12">
        {story.description}
      </p>
    </CardContent>
    <div className="relative aspect-[4/3] w-full">
      <Image
        src={story.image}
        alt={`${story.logo} success story`}
        width={347}
        height={240}
        className="w-full h-full object-cover"
      />
    </div>
  </Card>
);

const NotableCaseStudies: FC = () => {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl md:text-5xl leading-tight font-medium text-[#212121] mb-4 md:mb-6">
            Notable Case Studies
          </h2>
          <p className="text-sm md:text-xl font-normal leading-tight text-[#212121]">
            Find out how Cyberk performs for some of the world’s most dynamic
            businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {STORIES_DATA.map((story) => (
            <StoryCard key={story.logo + story.metric} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotableCaseStudies;
