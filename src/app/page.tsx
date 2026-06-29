import SeasonalHero from "@/components/SeasonalHero";
import TimelineNarrative from "@/components/TimelineNarrative";
import ArtifactGrid from "@/components/ArtifactGrid";
import PercheBucolicoConta from "@/components/PercheBucolicoConta";
import CommunitySection from "@/components/CommunitySection";
import VisitInfo from "@/components/VisitInfo";
import Footer from "@/components/Footer";
import AmsonHomeCTA from "@/components/AmsonHomeCTA";
import CTAButton from "@/components/CTAButton";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Museo Bucolicò - Primo museo agricolo open-air del Piemonte",
  description: "Museo Bucolicò: il primo museo agricolo open air a Santa Maria del Tempio, Casale Monferrato. Un viaggio immersivo tra storia, memoria e stagioni.",
  openGraph: {
    title: "Museo Bucolicò - Primo museo agricolo open-air del Piemonte",
    description: "Il primo museo agricolo open air a Santa Maria del Tempio, nel cuore del Monferrato.",
    url: "https://www.museobucolico.it",
    siteName: "Museo Bucolicò",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-home.webp",
        width: 1200,
        height: 630,
        alt: "Museo Bucolicò - La Memoria Contadina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Museo Bucolicò - Primo museo agricolo open-air del Piemonte",
    description: "Il primo museo agricolo open air a Santa Maria del Tempio, nel cuore del Monferrato.",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-brand-white overflow-x-hidden">
      <SeasonalHero />
      <CommunitySection />
      <TimelineNarrative />
      <ArtifactGrid />
      <PercheBucolicoConta />
      <AmsonHomeCTA />
      <CTAButton />
      <VisitInfo />
      <Footer />
    </main>
  );
}
