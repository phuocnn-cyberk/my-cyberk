import InfiniteHero from "@/components/ui/infinite-hero";
import { StatsSection } from "@/components/stats-section";
import { HowWeWorkSection } from "@/components/how-we-work";
import { SuccessStoriesSection } from "@/components/success-stories";
import { OurTeamSection } from "@/components/our-team";
import { FaqSection } from "@/components/faq";

export default function Home() {
  return (
    <main>
      <InfiniteHero />
      <StatsSection />
      <HowWeWorkSection />
      <SuccessStoriesSection />
      <OurTeamSection />
      <FaqSection />
    </main>
  );
}
