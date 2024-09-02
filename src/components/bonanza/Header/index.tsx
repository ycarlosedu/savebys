import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

import ActiveLink from "@/components/ActiveLink";

import { cn } from "@/lib/utils";

import { PAGE } from "@/constants";

import Logo from "images/savebys/logo_slogan_gray_cropped.svg";

type Props = ComponentProps<"div">;
const Nav = ({ className, ...props }: Props) => {
  return (
    <nav
      className={cn([
        "flex gap-6 items-center flex-wrap justify-center [&>.link:hover]:border-b-gray-secondary",
        className
      ])}
      {...props}
    >
      <ActiveLink href="/">Início</ActiveLink>
      <ActiveLink href="/bonanza/">Campanha Bonanza</ActiveLink>
      <Link
        href="https://encurtador.com.br/s6b95"
        className="link-btn h-[54px]"
      >
        Quero Doar
      </Link>
    </nav>
  );
};

export default function Header() {
  return (
    <header className="w-full bg-white flex flex-col lg:flex-row gap-6 items-center justify-center py-4 text-center text-gray-secondary flex-wrap z-10">
      <div className="w-full max-w-default flex flex-col lg:flex-row gap-6 items-center justify-between text-center flex-wrap px-default">
        <Link href={PAGE.HOME} aria-label="Ir para página inicial">
          <Image
            src={Logo}
            alt="Logo da marca SAVEBYS"
            className="h-auto w-200"
            width={200}
            height={200}
          />
        </Link>
        <Nav />
      </div>
    </header>
  );
}
