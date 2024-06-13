import { Metadata } from "next";

import Campaigns from "@/components/Campaigns";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowItWorks from "@/components/HowItWorks";
import MissionVisionValues from "@/components/MissionVisionValues";
import PresentationVideo from "@/components/PresentationVideo";
import SocialMedias from "@/components/SocialMedias";
import Supporters from "@/components/Supporters";
import Team from "@/components/Team";
import WannaBeCurator from "@/components/WannaBeCurator";
import WhoWeAre from "@/components/WhoWeAre";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Adote a empresa que você ama",
    description:
      "SAVEBYS é uma plataforma de financiamento coletivo para empresas. Adote a empresa que você ama e ajude a manter viva a economia local."
  };
}

export default function Home() {
  return (
    <main className="bg-gray-secondary text-white flex min-h-screen flex-col items-center justify-start max-w-[100vw] overflow-x-hidden h-full">
      <Header />
      <Campaigns />
      <PresentationVideo />
      <WhoWeAre />
      <MissionVisionValues />
      <HowItWorks />
      <WannaBeCurator />
      <Team />
      <SocialMedias />
      <Contact />
      <FAQ />
      <Supporters />
      <Footer />
    </main>
  );
}
