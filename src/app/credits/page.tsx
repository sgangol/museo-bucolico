import CreditsClient from "./CreditsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credits - Museo Bucolicò",
  description: "Crediti e organigramma del Museo Bucolicò, il primo museo agricolo open air del Piemonte.",
  openGraph: {
    title: "Credits - Museo Bucolicò",
    description: "Crediti e organigramma del Museo Bucolicò.",
    url: "https://www.museobucolico.it/credits",
    siteName: "Museo Bucolicò",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-default.webp",
        width: 1200,
        height: 630,
        alt: "Credits Museo Bucolicò",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Credits - Museo Bucolicò",
    description: "Crediti e organigramma del Museo Bucolicò.",
  },
};

export default function Credits() {
  return <CreditsClient />;
}
