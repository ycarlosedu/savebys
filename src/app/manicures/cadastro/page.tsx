import { Metadata } from "next";

import BuyerForm from "./FormBuyer";

export const metadata: Metadata = {
  title: "SAVEBYS - Cadastre-se no ReStart do Bem",
  description:
    "Cadastre-se no ReStart do Bem e veja se você se encaixa nos critérios para receber a doação de um kit de esmaltes.",
  alternates: {
    canonical: "https://savebys.com/manicures/cadastro"
  },
  openGraph: {
    title: "SAVEBYS - Cadastre-se no ReStart do Bem",
    description:
      "Cadastre-se no ReStart do Bem e veja se você se encaixa nos critérios para receber a doação de um kit de esmaltes.",
    url: "https://www.savebys.com/manicures/cadastro",
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

export default function BuyerRegister() {
  return (
    <section className="flex flex-col p-12 gap-6 items-center w-full max-w-[500px]">
      <h1 className="form-title text-gray-dark">
        Cadastro de <span className="text-primary">Interesse</span>
      </h1>
      <h2 className="text-neutral text-lg text-center">
        Analisaremos seus dados e caso seja elegível, receberá um email com as
        informações sobre a doação do kit.
      </h2>
      <BuyerForm />
    </section>
  );
}
