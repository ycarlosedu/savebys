import Campaigns from "@/components/Campaigns";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
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
    <main className="bg-secondary bg-gray-forms text-white flex min-h-screen flex-col items-center justify-start max-w-[100vw] overflow-x-hidden">
      <Header />
      <Campaigns />
      <PresentationVideo />
      <HowItWorks />
      <WhoWeAre />
      <MissionVisionValues />
      <p className="mb-20">Ajude a divulgar no instagram</p>

      <Footer />
    </main>
  );
}
