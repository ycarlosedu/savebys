import { Metadata } from "next";
import Image from "next/image";

import OpenForm from "./openForm";

export const metadata: Metadata = {
  title: "SAVEBYS - ReStart do Bem",
  description:
    "Doação de kits de esmaltes para manicures afetadas pelas enchentes no RS. Cadastre-se e veja se você se encaixa nos critérios para receber o benefício.",
  alternates: {
    canonical: "https://savebys.com/manicures"
  },
  openGraph: {
    title: "SAVEBYS - ReStart do Bem",
    description:
      "Doação de kits de esmaltes para manicures afetadas pelas enchentes no RS. Cadastre-se e veja se você se encaixa nos critérios para receber o benefício.",
    url: "https://www.savebys.com/manicures",
    siteName: "SAVEBYS",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.savebys.com/images/campaigns/lacre/banner-900x560.webp",
        width: 900,
        height: 560
      }
    ]
  }
};

export default function LacreCampaign() {
  return (
    <>
      <OpenForm />
      <section className="w-full max-w-[900px] px-default py-16 flex flex-col gap-8 items-center">
        <h1 className="title">CAMPANHA RESTART DO BEM</h1>
        <Image
          src="/images/campaigns/lacre/banner-900x560.webp"
          alt="Banner da campanha 'ReStart do Bem', promovidada pela Savebys e Lacre"
          width={900}
          height={560}
          priority
        />
        <div className="flex flex-col items-start gap-4 text-lg">
          <p className="font-bold">
            💅✨ Sabemos que o momento é difícil, especialmente para as
            manicures afetadas pelas enchentes no RS. Pensando em vocês,
            preparamos kits* de esmaltes, junto a marca gaúcha Lacre, para
            ajudar na retomada dos atendimentos e negócios.
          </p>
          <p>Vamos juntas reconstruir sonhos e colorir dias melhores!</p>
          <p>Corre pra cadastrar, pois as quantidades são limitadas de kits!</p>
          <p>
            Para participar da campanha, a empresa ou pessoa do cadastro deverá
            estar seguindo a página do Instagram da @lacrecosmeticos e da
            @save.bys e marcar dois amigos(as) nos comentários que você acha que
            merece ganhar e esteja dentro do perfil da campanha.
          </p>
          <h2 className="font-bold">O QUE CONSTA NO KIT</h2>
          <ol className="list-disc list-inside">
            <li>15 esmaltes</li>
            <li>1 Finalizador</li>
            <li>1 Espátula</li>
            <li>1 Acetona</li>
            <li>1 Base</li>
          </ol>
          <h2 className="font-bold">COMO FUNCIONA</h2>
          <ol className="list-decimal list-inside">
            <li>
              Você acessa o link{" "}
              <a href="/manicures/" className="underline">
                www.savebys.com/manicures
              </a>
              .
            </li>
            <li>Faz um cadastro.</li>
            <li>
              Aguarda contato para ver se está dentro dos critérios da campanha
              para ganhar o benefício.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
