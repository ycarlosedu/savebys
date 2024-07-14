import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import fecomerciorsServices from "@/services/fecomerciors";

import FurnitureDetails from "./FurnitureDetails";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await fecomerciorsServices.getProductById(params.id);
  if (!product) {
    return notFound();
  }

  return {
    title: "SAVEBYS - " + product.description,
    description:
      "Veja os detalhes do móvel disponível para doação na Mobília Solidária.",
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false
      }
    }
  };
}

export default async function FurnitureDetailsPage({ params }: Props) {
  const furniture = await fecomerciorsServices.getProductById(params.id);

  if (!furniture) {
    return notFound();
  }

  return (
    <section className="flex flex-col md:flex-row px-default justify-between gap-6 items-start w-full max-w-[1285px]">
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
