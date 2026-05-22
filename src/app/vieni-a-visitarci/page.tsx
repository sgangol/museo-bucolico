import type { Metadata } from "next";
import VieniAVISITARCI_Client from "./VieniAVISITARCI_Client";

export const metadata: Metadata = {
  title: "Vieni a Visitarci - Museo Bucolicò",
  description: "Orari di apertura e posizione del Museo Bucolicò a Santa Maria del Tempio, nel cuore del Monferrato. Ti aspettiamo!",
  openGraph: {
    title: "Vieni a Visitarci - Museo Bucolicò",
    description: "Orari di apertura e posizione del Museo Bucolicò a Santa Maria del Tempio.",
    url: "https://www.museobucolico.it/vieni-a-visitarci",
    siteName: "Museo Bucolicò",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-default.webp",
        width: 1200,
        height: 630,
        alt: "Visita Museo Bucolicò",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vieni a Visitarci - Museo Bucolicò",
    description: "Orari di apertura e posizione del Museo Bucolicò a Santa Maria del Tempio.",
  },
};

export default function VieniAVISITARCI_Page() {
  return <VieniAVISITARCI_Client />;
}
