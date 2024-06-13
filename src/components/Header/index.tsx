import Image from "next/image";

import Logo from "images/logo-savebys-slogan-cropped1.webp";

import ActiveLink from "../ActiveLink";

export default function Header() {
  return (
    <header className="w-full max-w-default flex flex-col md:flex-row gap-6 items-center justify-between py-8 text-center text-white flex-wrap px-default">
      <Image
        src={Logo}
        alt="Logo da marca SAVEBYS"
        className="h-auto"
        width={250}
        height={250}
      />
      <nav className="flex gap-6 items-center flex-wrap justify-center">
        <ActiveLink href="#quem-somos">Quem Somos</ActiveLink>
        <ActiveLink href="#como-funciona">Como Funciona</ActiveLink>
        <ActiveLink href="#campanhas">Campanhas</ActiveLink>
        <ActiveLink href="#quero-ser-curador">Quero ser um curador</ActiveLink>
        <ActiveLink href="#contato">Contato</ActiveLink>
      </nav>
    </header>
  );
}
