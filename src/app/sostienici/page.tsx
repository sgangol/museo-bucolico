import SostieniciClient from "./SostieniciClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sostieni Bucolicò - Museo Bucolicò",
  description: "Sostieni il Museo Bucolicò: la tua donazione aiuta a preservare la memoria contadina e il patrimonio agricolo del Monferrato.",
  openGraph: {
    title: "Sostieni Bucolicò - Museo Bucolicò",
    description: "La tua donazione aiuta a preservare la memoria contadina e il patrimonio agricolo del Monferrato.",
    url: "https://www.museobucolico.it/sostienici",
    siteName: "Museo Bucolicò",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Sostieni Museo Bucolicò",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sostieni Bucolicò - Museo Bucolicò",
    description: "La tua donazione aiuta a preservare la memoria contadina e il patrimonio agricolo del Monferrato.",
  },
};

export default function Sostienici() {
  return <SostieniciClient />;
}
