import AmsonClient from "./AmsonClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Amson - Festa del Grano | Museo Bucolicò",
  description:
    "L'Amson a la Madona è la rievocazione della mietitura e trebbiatura del grano a Santa Maria del Tempio. Giunta alla 34ª edizione, è la festa più importante del Museo Bucolicò.",
  openGraph: {
    title: "Amson - Festa del Grano | Museo Bucolicò",
    description:
      "34ª edizione dell'Amson a la Madona: la rievocazione della mietitura e trebbiatura del grano a Santa Maria del Tempio.",
    url: "https://www.museobucolico.it/amson",
    siteName: "Museo Bucolicò",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-default.webp",
        width: 1200,
        height: 630,
        alt: "Amson - Festa del Grano",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amson - Festa del Grano | Museo Bucolicò",
    description:
      "34ª edizione dell'Amson a la Madona: la rievocazione della mietitura e trebbiatura del grano.",
  },
};

export default function Amson() {
  return <AmsonClient />;
}