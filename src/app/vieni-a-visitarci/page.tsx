import type { Metadata } from "next";
import VieniAVISITARCI_Client from "./VieniAVISITARCI_Client";

export const metadata: Metadata = {
  title: "Vieni a Visitarci - Museo Bucolicò",
  description: "Orari di apertura e posizione del Museo Bucolicò a Santa Maria del Tempio, nel cuore del Monferrato. Un viaggio immersivo tra storia, memoria e stagioni.",
  keywords: "Orari museo, Visita Museo Bucolicò, Santa Maria del Tempio, Monferrato, Apertura museo",
};

export default function VieniAVISITARCI_Page() {
  return <VieniAVISITARCI_Client />;
}
