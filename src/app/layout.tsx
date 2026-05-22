import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: {
    default: "Museo Bucolicò - La Memoria Contadina",
    template: "%s - Museo Bucolicò",
  },
  description: "Il primo museo agricolo open air a Santa Maria del Tempio, nel cuore del Monferrato. Un viaggio immersivo tra storia, memoria e stagioni.",
  keywords: ["Museo agricolo", "Bucolicò", "Santa Maria del Tempio", "Casale Monferrato", "Trattori d'epoca", "Memoria contadina"],
  authors: [{ name: "Museo Bucolicò" }],
  creator: "Museo Bucolicò",
  publisher: "Museo Bucolicò",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.museobucolico.it"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Museo Bucolicò",
    description: "Il primo museo agricolo open air a Santa Maria del Tempio, nel cuore del Monferrato.",
    images: [
      {
        url: "/og-default.webp",
        width: 1200,
        height: 630,
        alt: "Museo Bucolicò - La Memoria Contadina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Museo Bucolicò - La Memoria Contadina",
    description: "Il primo museo agricolo open air a Santa Maria del Tempio, nel cuore del Monferrato.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-brand-white text-brand-dark antialiased selection:bg-brand-red selection:text-white`}
      >
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
