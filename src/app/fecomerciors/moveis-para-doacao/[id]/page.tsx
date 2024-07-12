import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import fecomerciorsServices from "@/services/fecomerciors";

import FurnitureDetails from "./FurnitureDetails";

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false
      }
    },
    title:
      "SAVEBYS - Veja os móveis disponíveis para doação na Mobília Solidária",
    description:
      "Para contribuir com as vítimas das enchentes no Rio Grande do Sul estamos promovendo uma campanha chamada Mobília Solidária que tem como objetivo arrecadar e doar móveis para pessoas/empresas atingidas com a catástrofe, através de um sindicato-curador, que irá mapear e validar as doações. A logística será de responsabilidade do próprio beneficiário que irá fazer a retirada do seu móvel no local e hora combinada previamente."
  };
}

type Props = {
  params: { id: string };
};
export default async function FurnitureDetailsPage({ params }: Props) {
  const furniture = await fecomerciorsServices.getProductById(params.id);

  if (!furniture) {
    return notFound();
  }

  return (
    <section className="flex justify-between gap-6 items-start w-full max-w-[1285px]">
      <Image
        src={furniture.image}
        alt={`Imagem do móvel ${furniture.id}: ${furniture.description}`}
        width={625}
        height={625}
        className="w-full max-w-[625px] h-full max-h-[625px] rounded-xl aspect-square"
      />
      <FurnitureDetails furniture={furniture} />
    </section>
  );
}
