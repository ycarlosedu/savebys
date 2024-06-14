import Image from "next/image";

import Logo from "images/savebys/logo-savebys-gray-slogan-cropped.svg";

import ActiveLink from "../ActiveLink";

export default function Header() {
  return (
    <header className="w-full bg-white flex flex-col lg:flex-row gap-6 items-center justify-center py-4 text-center text-gray-secondary flex-wrap border-b-2 border-gray-primary shadow-2xl z-10">
      <div className="w-full max-w-default flex flex-col lg:flex-row gap-6 items-center justify-between text-center flex-wrap px-default">
        <Image
          src={Logo}
          alt="Logo da marca SAVEBYS"
          className="h-auto w-200"
          width={200}
          height={200}
        />
        <nav className="flex gap-6 items-center flex-wrap justify-center [&>.link:hover]:border-b-gray-secondary">
          <ActiveLink href="#quem-somos">Quem Somos</ActiveLink>
          <ActiveLink href="#como-funciona">Como Funciona</ActiveLink>
          <ActiveLink href="#campanhas">Campanhas</ActiveLink>
          <ActiveLink href="#quero-ser-curador">
            Quero ser um curador
          </ActiveLink>
          <ActiveLink href="#contato">Contato</ActiveLink>
        </nav>
      </div>
    </header>
  );
}
