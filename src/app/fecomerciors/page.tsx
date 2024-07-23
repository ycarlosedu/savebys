import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Mobília Solidária",
    description:
      "Para contribuir com as vítimas das enchentes no Rio Grande do Sul estamos promovendo uma campanha chamada Mobília Solidária que tem como objetivo arrecadar e doar móveis para pessoas/empresas atingidas com a catástrofe, através de um sindicato-curador, que irá mapear e validar as doações. A logística será de responsabilidade do próprio beneficiário que irá fazer a retirada do seu móvel no local e hora combinada previamente.",
    alternates: {
      canonical: "https://savebys.com/fecomerciors"
    },
    openGraph: {
      title: "SAVEBYS - Mobília Solidária",
      description:
        "Para contribuir com as vítimas das enchentes no Rio Grande do Sul estamos promovendo uma campanha chamada Mobília Solidária que tem como objetivo arrecadar e doar móveis para pessoas/empresas atingidas com a catástrofe, através de um sindicato-curador, que irá mapear e validar as doações. A logística será de responsabilidade do próprio beneficiário que irá fazer a retirada do seu móvel no local e hora combinada previamente.",
      url: "https://www.savebys.com/fecomerciors",
      siteName: "SAVEBYS",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "https://www.savebys.com/images/campaigns/fecomerciors/banner-900x560.webp",
          width: 900,
          height: 560
        }
      ]
    }
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
          src="/images/campaigns/fecomerciors/banner-900x560.webp"
          alt="Banner da campanha Mobília Solidária"
          width={900}
          height={560}
          priority
        />
        <div className="flex flex-col items-start gap-4 text-lg">
          <p>
            Para contribuir com os diversos estabelecimentos atingidos pelas
            enchentes no Rio Grande do Sul criamos a campanha Mobília Solidária.
            <br />
            A ideia é simples: fazer a conexão entre quem tem algo para doar e
            quem precisa de algo para retomar suas atividades.
            <br />
            Serão aceitos mobiliários e itens comerciais como estantes, araras,
            bancadas, mesas de escritório, cadeiras, entre tantos outros.
            <br />O mapeamento e a validação das necessidades passarão por uma
            curadoria. Já a logística será de responsabilidade do próprio
            beneficiário que irá fazer a retirada do seu móvel no local e hora
            combinada previamente.
          </p>
          <h2 className="font-bold">QUEM PODE RECEBER</h2>
          <ol className="list-decimal list-inside">
            <li>
              O estabelecimento deve estar localizado em um dos 95 municípios
              que tiveram situação de calamidade pública decretada (
              <a
                href="https://www.diariooficial.rs.gov.br/materia?id=1002017"
                className="underline"
              >
                acesse a lista aqui
              </a>
              ).
            </li>
            <li>Precisa fazer parte do CNAE do comércio.</li>
          </ol>
          <h2 className="font-bold">QUEM PODE DOAR</h2>
          <ol className="list-decimal list-inside">
            <li>Qualquer pessoa poderá doar seus móveis para a campanha.</li>
            <li>
              As fotos a serem cadastradas deverão estar nítidas e com no máximo
              1Mb.
            </li>
            <li>*LEMBRANDO QUE SÃO ITENS PARA ESTABELECIMENTOS COMERCIAIS.</li>
          </ol>
          <h2 className="font-bold">COMO FUNCIONA</h2>
          <p>
            A pessoa interessada em doar (DOADOR) deve se cadastrar em QUERO
            DOAR MÓVEIS. Ao realizar o cadastro e enviar as fotos, o ‘DOADOR’
            irá receber uma confirmação automática de que seus itens já estão
            disponíveis para serem selecionados.
            <br />
            Quem deseja receber (RECEPTOR), deverá selecionar os móveis em LISTA
            DE MÓVEIS, podendo utilizar o filtro pela área de atuação para
            facilitar a localização. Os móveis escolhidos serão enviados
            automaticamente para Minha Sacola e, para efetivar a solicitação, o
            ‘RECEPTOR’ deverá preencher um cadastro.
            <br />
            <b>Importante</b>: o ‘RECEPTOR’ deverá obrigatoriamente informar a
            CNAE (Classificação Nacional das Atividades Econômicas) compatível
            com o tipo de móvel/item solicitado. O grupo curador, irá avaliar e
            validar as informações cadastradas e, estando tudo correto, repassa
            o contato do DOADOR para que o RECEPTOR faça as devidas combinações
            para retirada.
          </p>
          <h2 className="font-bold">QUEM SOMOS</h2>
          <p>
            A Federação do Comércio de Bens e de Serviços do Estado do Rio
            Grande do Sul (Fecomércio-RS) representa as empresas do setor
            terciário do Rio Grande do Sul. Conta com mais de 100 sindicatos
            empresariais em sua base para subsidiar e intensificar suas ações.
            Gerencia o Sesc/RS e o Senac-RS, com mais de uma centena de Unidades
            Operacionais e Escolas no Estado, proporcionando ações na área de
            bem-estar social e qualificação profissional a milhares de gaúchos.
          </p>
        </div>
      </section>
    </>
  );
}
