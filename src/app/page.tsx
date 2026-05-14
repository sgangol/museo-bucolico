import SeasonalHero from "@/components/SeasonalHero";
import TimelineNarrative from "@/components/TimelineNarrative";
import ArtifactGrid from "@/components/ArtifactGrid";
import PercheBucolicoConta from "@/components/PercheBucolicoConta";
import CommunitySection from "@/components/CommunitySection";
import VisitInfo from "@/components/VisitInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-white overflow-x-hidden">
      <SeasonalHero />
      <CommunitySection />
      <TimelineNarrative />
      <ArtifactGrid />
      <PercheBucolicoConta />
      <VisitInfo />
      <Footer />
    </main>
  );
}
