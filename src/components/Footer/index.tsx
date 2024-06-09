import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center gap-6 px-4 py-6 text-white lg:flex-row-reverse md:justify-between md:px-20 md:py-8">
      <nav className="flex items-center gap-6 text-center flex-wrap justify-center">
        <Link className="link" href="#quem-somos">
          Quem Somos
        </Link>
        <Link className="link" href="#como-funciona">
          Como funciona
        </Link>
        <Link className="link" href="#campanhas">
          Campanhas
        </Link>
        <Link className="link" href="#quero-ser-curador">
          Quero ser um curador
        </Link>
        <Link href="#contato" className="link-btn">
          Contato
        </Link>
      </nav>

      <div className="flex items-center justify-center gap-4">
        <Image
          src="/images/logo-savebys-cropped.png"
          width={92}
          height={92}
          alt="Logo da marca SaveBys"
        />
        <hr className="h-[24px] w-[1px] bg-white" />
        <p className="w-fit break-normal">
          Copyright ©{new Date().getFullYear()} savebys.com
        </p>
      </div>
    </footer>
  );
}
