import { Metadata } from "next";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

import { COOKIES, PAGE, getCookies } from "@/constants";

import { CaretLeft } from "@phosphor-icons/react/dist/ssr";

import { DonatorValuesWithId } from "../cadastro-doador/FormDonator";
import FormFurniture from "./FormFurniture";

export const metadata: Metadata = {
  title: "SAVEBYS - Cadastre seu móvel para ser doado na Mobília Solidária",
  description:
    "Participe da nossa campanha Mobília Solidária e ajude negócios no Rio Grande do Sul afetados pelas enchentes. Cadastre seus móveis para doação e faça a diferença!",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

export default function FurnitureRegister() {
  const cookieStore = cookies();
  const donator: DonatorValuesWithId = getCookies(cookieStore, COOKIES.DONATOR);
  if (!donator.giverId) {
    return redirect(PAGE.FECOMERCIO.REGISTER_DONATOR);
  }

  return (
    <section className="flex flex-col p-12 gap-6 items-center w-full max-w-[500px]">
      <Link
        href={PAGE.FECOMERCIO.REGISTER_DONATOR}
        className="link-btn-secondary h-[58px]"
      >
        <CaretLeft size={16} />
        Voltar para Meus Dados
      </Link>
      <h1 className="form-title text-gray-dark">
        Cadastro de <span className="text-primary">Móvel</span>
      </h1>
      <h2 className="text-neutral text-lg text-center">
        Insira os dados do móvel a ser doado.
      </h2>
      <FormFurniture donator={donator} />
    </section>
  );
}
