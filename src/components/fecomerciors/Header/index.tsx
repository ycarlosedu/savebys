import Image from "next/image";
import Link from "next/link";

import ActiveLink from "@/components/ActiveLink";

import { ShoppingBag } from "@phosphor-icons/react/dist/ssr";
import Logo from "images/savebys/logo-savebys-gray-slogan-cropped.svg";

export default function Header() {
  return (
    <header className="w-full bg-white flex flex-col lg:flex-row gap-6 items-center justify-center py-4 text-center text-gray-secondary flex-wrap z-10">
      <div className="w-full max-w-default flex flex-col lg:flex-row gap-6 items-center justify-between text-center flex-wrap px-default">
        <Image
          src={Logo}
          alt="Logo da marca SAVEBYS"
          className="h-auto w-200"
          width={200}
          height={200}
        />
        <nav className="flex gap-6 items-center flex-wrap justify-center [&>.link:hover]:border-b-gray-secondary">
          <ActiveLink href="/">Início</ActiveLink>
          <ActiveLink href="/fecomerciors">Campanha Fecomércio</ActiveLink>
          <ActiveLink href="/fecomerciors/moveis-para-doacao">
            Lista de Móveis
          </ActiveLink>
          <Link
            href="/fecomerciors/cadastro-doador"
            className="link-btn h-[54px]"
          >
            Quero Doar
          </Link>
          <Link
            href="/fecomerciors/minha-sacola"
            className="link-btn-secondary h-[54px]"
          >
            Minha Sacola
            <ShoppingBag size={32} />
          </Link>
        </nav>
      </div>
    </header>
  );
}