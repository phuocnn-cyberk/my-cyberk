import InfiniteHero from "@/components/ui/infinite-hero";
import { HowWeWorkSection } from "@/components/how-we-work";
import { SuccessStoriesSection } from "@/components/success-stories";
import { OurTeamSection } from "@/components/our-team";
import { FaqSection } from "@/components/faq";
import { CyberkSolutionSection } from "@/components/cyberk-solution";

export default function Home() {
  return (
    <main>
      <InfiniteHero />
      <CyberkSolutionSection />
      <HowWeWorkSection />
      <SuccessStoriesSection />
      <OurTeamSection />
      <FaqSection />
    </main>
  );
}
