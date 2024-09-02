import { Metadata } from "next";

import Campaigns from "@/components/Campaigns";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Personas from "@/components/Personas";
import PresentationVideo from "@/components/PresentationVideo";
import SocialMedias from "@/components/SocialMedias";
import Supporters from "@/components/Supporters";
import WannaBeCurator from "@/components/WannaBeCurator";
import WhyChooseUs from "@/components/WhyChooseUs";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Adote a empresa que você ama",
    description:
      "SAVEBYS é uma plataforma de financiamento coletivo para empresas. Adote a empresa que você ama e ajude a manter viva a economia local.",
    alternates: {
      canonical: "https://savebys.com"
    }
  };
}

export default function Home() {
  return (
    <main className="bg-white text-gray-secondary flex min-h-screen flex-col items-center justify-start max-w-[100vw] overflow-x-hidden h-full">
      <h1 className="sr-only">SAVEBYS</h1>
      <Header />
      <Campaigns />
      <PresentationVideo />
      <Personas />
      <WannaBeCurator />
      <WhyChooseUs />
      <SocialMedias />
      <Contact />
      <Supporters />
      <Footer />
    </main>
  );
}
