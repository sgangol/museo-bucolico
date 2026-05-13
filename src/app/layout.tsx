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
  title: "Museo Bucolicò - La Memoria Contadina",
  description: "Bucolicò: il primo museo agricolo open air a Santa Maria del Tempio, Casale Monferrato. Un viaggio immersivo tra storia, memoria e stagioni.",
  keywords: "Museo agricolo, Bucolicò, Santa Maria del Tempio, Casale Monferrato, Trattori d'epoca, Memoria contadina",
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
