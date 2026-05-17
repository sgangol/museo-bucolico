import ContattiClient from "./ContattiClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti - Museo Bucolicò",
  description: "Contatta il Museo Bucolicò per informazioni, donazioni e associazioni. Tel. +39 0142 000000 | Email: info@museobucolico.it",
  openGraph: {
    title: "Contatti - Museo Bucolicò",
    description: "Contatta il Museo Bucolicò per informazioni, donazioni e associazioni.",
    url: "https://www.museobucolico.it/contatti",
    siteName: "Museo Bucolicò",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Contatta Museo Bucolicò",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contatti - Museo Bucolicò",
    description: "Contatta il Museo Bucolicò per informazioni, donazioni e associazioni.",
  },
};

export default function Contatti() {
  return <ContattiClient />;
}
