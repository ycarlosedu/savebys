import { Metadata } from "next";

import FormDonator from "./FormDonator";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Cadastre-se como Doador na Mobília Solidária",
    description:
      "Para contribuir com as vítimas das enchentes no Rio Grande do Sul estamos promovendo uma campanha chamada Mobília Solidária que tem como objetivo arrecadar e doar móveis para pessoas/empresas atingidas com a catástrofe, através de um sindicato-curador, que irá mapear e validar as doações. A logística será de responsabilidade do próprio beneficiário que irá fazer a retirada do seu móvel no local e hora combinada previamente."
  };
}

export default function DonatorRegister() {
  return (
    <section className="flex flex-col p-12 gap-6 items-center w-full max-w-[500px]">
      <h1 className="form-title text-gray-dark">
        Cadastro de <span className="text-primary">Doador</span>
      </h1>
      <h2 className="text-neutral text-lg text-center">
        Coloque seus dados para ser um dos nossos doadores e ajudar os negócios
        que amamos!
      </h2>
      <FormDonator />
    </section>
  );
}
