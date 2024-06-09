import Campaigns from "@/components/Campaigns";
import Header from "@/components/Header";
import MissionVisionValues from "@/components/MissionVisionValues";
import PresentationVideo from "@/components/PresentationVideo";
import WhoWeAre from "@/components/WhoWeAre";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Adote a empresa que você ama",
    description:
      "SAVEBYS é uma plataforma de financiamento coletivo para empresas. Adote a empresa que você ama e ajude a manter viva a economia local."
  };
}

export default function Home() {
  return (
    <main className="bg-secondary text-white flex min-h-screen flex-col items-center justify-start max-w-[100vw] overflow-x-hidden">
      <Header />
      <Campaigns />
      <PresentationVideo />
      <WhoWeAre />
      <MissionVisionValues />
      <p className="mb-20">Ajude a divulgar no instagram</p>
    </main>
  );
}
