import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Ajude uma criança a voltar para a escola",
    description:
      "As enchentes de maio devastaram 85 escolas e impactaram 20 mil alunos. Doe um kit escolar e nos ajude a permitir que esses estudantes retornem às aulas com dignidade e esperança.",
    alternates: {
      canonical: "https://savebys.com/bonanza"
    },
    openGraph: {
      title: "SAVEBYS - Ajude uma criança a voltar para a escola",
      description:
        "As enchentes de maio devastaram 85 escolas e impactaram 20 mil alunos. Doe um kit escolar e nos ajude a permitir que esses estudantes retornem às aulas com dignidade e esperança.",
      url: "https://www.savebys.com/bonanza",
      siteName: "SAVEBYS",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "https://www.savebys.com/images/campaigns/bonanza/banner-900x560.webp",
          width: 900,
          height: 560
        },
        {
          url: "https://www.savebys.com/images/campaigns/bonanza/banner-1080x1080.webp",
          width: 1080,
          height: 1080
        }
      ]
    }
  };
}

export default function BonanzaCampaign() {
  return (
    <>
      <div className="flex flex-col gap-4 pt-8 md:flex-row md:gap-8 md:pt-16 items-center justify-center px-default">
        <Link
          href="https://encurtador.com.br/s6b95"
          className="link-btn h-[58px]"
        >
          CONTRIBUIR COM UMA DOAÇÃO
          <CaretRight size={16} />
        </Link>
      </div>
      <section className="w-full max-w-[900px] px-default py-16 flex flex-col gap-8 items-center">
        <h1 className="title">AJUDE UMA CRIANÇA A VOLTAR PARA A ESCOLA</h1>
        <Image
          src="/images/campaigns/bonanza/banner-900x560.png"
          alt="Banner da campanha 'AJUDE UMA CRIANÇA A VOLTAR PARA A ESCOLA'"
          width={900}
          height={560}
          priority
        />
        <div className="flex flex-col items-start gap-4 text-lg">
          <p className="font-bold">
            🚨A META É ATENDER OS 20 MIL ESTUDANTES IMPACTADOS ATÉ 05/08, QUANDO
            AS AULAS SERÃO RETOMADAS!🚨
          </p>
          <p>
            Por R$ 29,99, o preço de um lanche rápido, você pode mudar o futuro
            de uma criança!
          </p>
          <p>
            O impacto dessa pequena quantia vai permitir que um aluno retorne à
            escola com dignidade e confiança.{" "}
          </p>
          <h2 className="font-bold">COMO FUNCIONA</h2>
          <ol className="list-decimal list-inside">
            <li>
              Você doa pelo link{" "}
              <a
                href="https://encurtador.com.br/s6b95"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                https://encurtador.com.br/s6b95
              </a>
              .
            </li>
            <li>Ao receber as doações, a Livraria Clip separa kit escolar.</li>
            <li>
              O material é enviado às escolas e aos estudantes impactados.
            </li>
          </ol>
          <p className="font-bold">
            🎒Ao acrescentar R$ 27,99 à sua contribuição você doa, também, uma
            mochila escolar.
          </p>
          <p>Compartilhe esta mensagem e ajude a espalhar esperança! 💚❤️💛</p>
          <p className="italic">
            saiba mais sobre a Bonanza:{" "}
            <a
              className="underline"
              href="https://bonanza.ong/"
              target="_blank"
              rel="noreferrer"
            >
              https://bonanza.ong/
            </a>
          </p>
        </div>
        <Image
          src="/images/campaigns/bonanza/banner-1080x1080.png"
          alt="Banner detalhado da campanha 'AJUDE UMA CRIANÇA A VOLTAR PARA A ESCOLA'"
          width={1080}
          height={1080}
          priority
        />
      </section>
    </>
  );
}
