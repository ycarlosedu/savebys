import { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "SAVEBYS - Veja os móveis disponíveis para doação na Mobília Solidária",
    description:
      "Para contribuir com as vítimas das enchentes no Rio Grande do Sul estamos promovendo uma campanha chamada Mobília Solidária que tem como objetivo arrecadar e doar móveis para pessoas/empresas atingidas com a catástrofe, através de um sindicato-curador, que irá mapear e validar as doações. A logística será de responsabilidade do próprio beneficiário que irá fazer a retirada do seu móvel no local e hora combinada previamente."
  };
}

export default function FurnituresToDonation() {
  return (
    <section className="flex flex-col p-12 gap-6 items-center w-full max-w-[1282px]">
      <Image
        src="/images/campaigns/fecomerciors/banner-1265x340.png"
        alt="Banner da campanha Mobília Solidária"
        width={1265}
        height={340}
        className="w-[1265px] h-[340px] object-cover"
      />

      <div className="bg-gray-secondary self-start flex flex-col gap-3">
        <h2>Filtro</h2>
        <button>Limpar Filtros</button>
      </div>
    </section>
  );
}