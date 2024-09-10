import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - CAMPANHA LACRE",
    description:
      "Por apenas R$ 130,00, as manicures atingidas pelas enchentes no RS poderão adquirir um super KIT a preço de custo.",
    alternates: {
      canonical: "https://savebys.com/lacre"
    },
    openGraph: {
      title: "SAVEBYS - CAMPANHA LACRE",
      description:
        "Por apenas R$ 130,00, as manicures atingidas pelas enchentes no RS poderão adquirir um super KIT a preço de custo.",
      url: "https://www.savebys.com/lacre",
      siteName: "SAVEBYS",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "https://www.savebys.com/images/campaigns/lacre/banner-900x560.jpg",
          width: 900,
          height: 560
        }
      ]
    }
  };
}

export default function LacreCampaign() {
  return (
    <>
      <div className="flex flex-col gap-4 pt-8 md:flex-row md:gap-8 items-center justify-center px-default">
        <Link href="#" className="link-btn h-[58px]">
          ME CADASTRAR
          <CaretRight size={16} />
        </Link>
      </div>
      <section className="w-full max-w-[900px] px-default py-16 flex flex-col gap-8 items-center">
        <h1 className="title">CAMPANHA LACRE</h1>
        <Image
          src="/images/campaigns/lacre/banner-900x560.jpg"
          alt="Banner da campanha 'AJUDE UMA CRIANÇA A VOLTAR PARA A ESCOLA'"
          width={900}
          height={560}
          priority
        />
        <div className="flex flex-col items-start gap-4 text-lg">
          <p className="font-bold">
            🚨A META É ATENDER 50 MANICURES IMPACTADAS COM AS ENCHENTES DO RS!🚨
          </p>
          <p>
            Por apenas R$ 130,00 as manicures poderão adquirir um super KIT a
            preço de custo.
          </p>
          <p>
            O impacto dessa campanha vai ajudar as manicures a voltarem a
            trabalhar e refazerem seus negócios.
          </p>
          <h2 className="font-bold">O QUE CONSTA NO KIT</h2>
          <ol className="list-disc list-inside">
            <li>15 esmaltes</li>
            <li>1 Finalizador</li>
            <li>1 Espátula</li>
            <li>1 Acetona</li>
          </ol>
          <h2 className="font-bold">COMO FUNCIONA</h2>
          <ol className="list-decimal list-inside">
            <li>
              Você acessa o link{" "}
              <a href="/manicures" className="underline">
                www.savebys.com/manicures
              </a>
              .
            </li>
            <li>Faz o cadastro.</li>
            <li>
              Se atender aos critérios da campanha, recebe o acesso a plataforma
              para fazer a compra.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
