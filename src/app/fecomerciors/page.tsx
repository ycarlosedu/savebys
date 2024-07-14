import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Mobília Solidária",
    description:
      "Para contribuir com as vítimas das enchentes no Rio Grande do Sul estamos promovendo uma campanha chamada Mobília Solidária que tem como objetivo arrecadar e doar móveis para pessoas/empresas atingidas com a catástrofe, através de um sindicato-curador, que irá mapear e validar as doações. A logística será de responsabilidade do próprio beneficiário que irá fazer a retirada do seu móvel no local e hora combinada previamente."
  };
}

export default function FecomercioCampaign() {
  return (
    <>
      <div className="flex flex-col gap-4 pt-8 md:flex-row md:gap-8 md:pt-16 items-center justify-center px-default">
        <Link href="./cadastro-doador" className="link-btn h-[58px]">
          QUERO DOAR MÓVEIS
          <CaretRight size={16} />
        </Link>
        <Link href="./moveis-para-doacao" className="link-btn h-[58px]">
          VER MÓVEIS CADASTRADOS
          <CaretRight size={16} />
        </Link>
      </div>
      <section className="w-full max-w-[900px] px-default py-16 flex flex-col gap-8 items-center">
        <h1 className="title">CAMPANHA MOBÍLIA SOLIDÁRIA</h1>
        <Image
          src="/images/campaigns/fecomerciors/banner-900x560.png"
          alt="Banner da campanha Mobília Solidária"
          width={900}
          height={560}
        />
        <div className="flex flex-col items-start gap-4 text-lg">
          <p>
            A Federação do Comércio de Bens e de Serviços do Estado do Rio
            Grande do Sul (Fecomércio-RS) representa as empresas do comércio de
            bens, serviços e turismo no Rio Grande do Sul. O Sistema
            Fecomércio-RS conta com mais de 100 sindicatos empresariais em sua
            base para subsidiar e intensificar suas ações. Gerencia ainda o
            Sesc/RS e o Senac-RS, com mais de uma centena de Unidades
            Operacionais no Estado, proporcionando ações na área de bem-estar
            social e qualificação profissional a milhares de gaúchos.
          </p>
          <p>
            Para contribuir com as vítimas das enchentes no Rio Grande do Sul
            estamos promovendo uma campanha chamada Mobília Solidária que tem
            como objetivo arrecadar e doar móveis para pessoas/empresas
            atingidas com a catástrofe, através de um sindicato-curador, que irá
            mapear e validar as doações.
          </p>
          <p>
            A logística será de responsabilidade do próprio beneficiário que irá
            fazer a retirada do seu móvel no local e hora combinada previamente.{" "}
          </p>
          <p className="font-bold">Regras para beneficiários:</p>
          <ol className="list-decimal list-inside">
            <li>Deverá estar dentro dos 95 municípios em calamidade.</li>
            <li>Deverá fazer parte do CNAE do comércio.</li>
          </ol>
          <p className="font-bold">Regras para o doador:</p>
          <ol className="list-decimal list-inside">
            <li>Qualquer pessoa poderá doar seus móveis para a campanha.</li>
            <li>
              As fotos a serem cadastradas deverão estar nítidas e com no máximo
              1Mb.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
