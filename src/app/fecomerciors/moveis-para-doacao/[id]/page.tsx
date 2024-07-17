import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import fecomerciorsServices, { Product } from "@/services/fecomerciors";

import FurnitureDetails from "./FurnitureDetails";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let product: Product | undefined;
  try {
    if (isNaN(parseInt(params.id))) {
      return notFound();
    }
    product = await fecomerciorsServices.getProductById(params.id);

    if (!product) {
      return notFound();
    }
  } catch (error) {
    console.error("🚀 ~ generateMetadata ~ error:", error);
    return notFound();
  }

  return {
    title: "SAVEBYS - " + product.productDescription,
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
  let product: Product | undefined;
  try {
    if (isNaN(parseInt(params.id))) {
      return notFound();
    }
    product = await fecomerciorsServices.getProductById(params.id);

    if (!product) {
      return notFound();
    }
  } catch (error) {
    console.error("🚀 ~ FurnitureDetailsPage ~ error:", error);
    return notFound();
  }

  return (
    <section className="flex flex-col md:flex-row px-default justify-between gap-6 items-start w-full max-w-[1285px] min-h-fecomercio">
      <Image
        src={product.image}
        alt={`Imagem do móvel ${product.id}: ${product.productDescription}`}
        width={625}
        height={625}
        className="w-full max-w-[625px] h-full max-h-[625px] rounded-xl aspect-square"
      />
      <FurnitureDetails furniture={product} />
    </section>
  );
}
