import { Metadata } from "next";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MissionVisionValues from "@/components/MissionVisionValues";
import Team from "@/components/Team";
import WhoWeAre from "@/components/WhoWeAre";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Quem Somos",
    description:
      "Veja quem somos, nossa missão, visão e valores, e conheça nossa equipe.",
    alternates: {
      canonical: "https://savebys.com/quem-somos"
    }
  };
}

export default function WhoWeArePage() {
  return (
    <main className="bg-white text-gray-secondary flex min-h-screen flex-col items-center justify-start max-w-[100vw] overflow-x-hidden h-full">
      <Header />
      <WhoWeAre />
      <MissionVisionValues />
      <Team />
      <Footer />
    </main>
  );
}
