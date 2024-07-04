import { Metadata } from "next";
import Link from "next/link";

import Header from "@/components/fecomerciors/Header";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Mobília Solidária",
    description:
      "Para contribuir com as vítimas das enchentes no Rio Grande do Sul estamos promovendo uma campanha chamada Mobília Solidária que tem como objetivo arrecadar e doar móveis para pessoas/empresas atingidas com a catástrofe, através de um sindicato-curador, que irá mapear e validar as doações. A logística será de responsabilidade do próprio beneficiário que irá fazer a retirada do seu móvel no local e hora combinada previamente."
  };
}

export default function MobiliaSolidaria() {
  return (
    <main className="bg-white text-gray-secondary flex min-h-screen flex-col items-center justify-start max-w-[100vw] overflow-x-hidden h-full">
      <Header />
      <div className="flex items-center justify-center gap-8 pt-16 px-default">
        <Link href="./cadastro-doador" className="link-btn h-[58px]">
          QUERO DOAR MÓVEIS
          <CaretRight size={16} />
        </Link>
        <Link href="./moveis-para-doacao" className="link-btn h-[58px]">
          VER MÓVEIS CADASTRADOS
          <CaretRight size={16} />
        </Link>
      </div>
    </main>
  );
}
