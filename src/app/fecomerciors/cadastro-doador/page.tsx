import { Metadata } from "next";

import FormDonator from "./FormDonator";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Cadastre-se como Doador na Mobília Solidária",
    description:
      "Participe da nossa campanha Mobília Solidária e ajude negócios no Rio Grande do Sul afetados pelas enchentes. Cadastre-se como doador e faça a diferença!",
    alternates: {
      canonical: "https://savebys.com/fecomerciors/cadastro-doador"
    },
    openGraph: {
      title: "SAVEBYS - Cadastre-se como Doador na Mobília Solidária",
      description:
        "Participe da nossa campanha Mobília Solidária e ajude negócios no Rio Grande do Sul afetados pelas enchentes. Cadastre-se como doador e faça a diferença!",
      url: "https://www.savebys.com/fecomerciors/cadastro-doador",
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
