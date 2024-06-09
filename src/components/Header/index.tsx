import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row gap-8 items-center justify-center py-8 text-center text-white flex-wrap px-default">
      <Image
        src="/images/logo-savebys-cropped.png"
        alt="Logo da marca SAVEBYS"
        width={200}
        height={200}
        layout="fixed"
      />
      <nav className="flex gap-8 items-center flex-wrap justify-center">
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
        <Link className="link-btn" href="#contato">
          Contato
        </Link>
      </nav>
      {/* <button className="bg-primary p-2 rounded-md md:hidden">
        <List size={24} />
      </button> */}
    </header>
  );
}
