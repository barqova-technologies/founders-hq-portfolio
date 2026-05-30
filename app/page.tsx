import Hero from "@/components/home/Hero";
import StatsStrip from "@/components/home/StatsStrip";
import Manifesto from "@/components/home/Manifesto";
import PillarsGrid from "@/components/home/PillarsGrid";
import PinnedPrograms from "@/components/home/PinnedPrograms";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import Meetups from "@/components/home/Meetups";
import FoundingNote from "@/components/home/FoundingNote";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <Manifesto />
      <MarqueeStrip />
      <PillarsGrid />
      <PinnedPrograms />
      <Meetups />
      <FoundingNote />
      <CTABanner />
    </>
  );
}
