import Image from "next/image";

import Logo from "images/savebys/logo-savebys-gray-slogan-cropped.svg";

import ActiveLink from "../ActiveLink";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-secondary flex w-full flex-col items-center justify-center gap-6 px-4 py-6 md:py-8">
      <div className="w-full px-default max-w-default flex flex-col items-center justify-center gap-6 px-4 py-6">
        <nav className="flex items-center [&>.link:hover]:border-b-gray-secondary gap-6 text-center flex-wrap justify-center">
          <ActiveLink href="#campanhas">Campanhas</ActiveLink>
          <ActiveLink href="#quem-somos">Quem Somos</ActiveLink>
          {/* <ActiveLink href="#como-funciona">Como funciona</ActiveLink> */}
          <ActiveLink href="#quero-ser-curador">
            Quero ser um Curador
          </ActiveLink>
          <ActiveLink href="#contato">Contato</ActiveLink>
          <ActiveLink href="#apoiadores">Apoiadores</ActiveLink>
        </nav>

        <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
          <Image
            src={Logo}
            width={200}
            height={200}
            alt="Logo da marca SaveBys"
            className="w-200 h-auto"
          />
          <hr className="h-[24px] w-[1px] bg-gray-secondary hidden md:block" />
          <p className="w-fit break-normal">
            Copyright ©{new Date().getFullYear()} savebys.com
          </p>
        </div>
      </div>
    </footer>
  );
}
