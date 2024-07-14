import { Metadata } from "next";
import Link from "next/link";

import { PAGE } from "@/constants";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Produto não encontrado",
    description: "O item desejado não foi encontrado.",
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

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center h-full min-h-fecomercio">
      <h1 className="text-4xl font-bold text-gray-900">
        Produto não encontrado
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        O item que você está procurando não existe ou não está mais disponível.
      </p>
      <Link
        href={PAGE.FECOMERCIO.FURNITURE_LIST}
        className="link-btn-secondary px-8 w-fit h-[58px] mt-6"
      >
        Ver todos os móveis disponíveis
        <CaretRight size={16} />
      </Link>
    </section>
  );
}
