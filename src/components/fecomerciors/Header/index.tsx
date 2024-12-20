"use client";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

import ActiveLink from "@/components/ui/ActiveLink";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";
import useMenuStore, { MENU } from "@/stores/menuStore";
import useProductStore from "@/stores/productStore";

import { cn } from "@/lib/utils";

import { PAGE } from "@/constants";

import { List, ShoppingBagOpen } from "@phosphor-icons/react/dist/ssr";
import Logo from "images/savebys/logo_slogan_gray_cropped.svg";

type Props = ComponentProps<"nav"> & {
  onClickLink?: () => void;
};
const Nav = ({ className, onClickLink, ...props }: Props) => {
  const { products, animateBagButton, setAnimateBagButton } = useProductStore();

  return (
    <nav
      className={cn([
        "flex gap-6 items-center flex-wrap justify-center [&>.link:hover]:border-b-gray-secondary",
        className
      ])}
      {...props}
    >
      <ActiveLink onClick={onClickLink} href="/">
        Início
      </ActiveLink>
      <ActiveLink onClick={onClickLink} href="/fecomerciors/">
        Campanha Fecomércio
      </ActiveLink>
      <ActiveLink
        onClick={onClickLink}
        href="/fecomerciors/moveis-para-doacao/"
      >
        Lista de Móveis
      </ActiveLink>
      <Link
        onClick={onClickLink}
        href="/fecomerciors/cadastro-doador/"
        className="link-btn h-[54px]"
      >
        Quero Doar
      </Link>
      <Link
        onClick={onClickLink}
        href="/fecomerciors/minha-sacola/"
        className={`link-btn-secondary h-[54px] relative`}
      >
        Minha Sacola
        <ShoppingBagOpen size={32} />
        {products.length > 0 && (
          <span
            onAnimationEnd={() => setAnimateBagButton(false)}
            className={`absolute -top-3 -right-3 bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center ${animateBagButton ? "animate-wiggle" : ""}`}
          >
            {products.length}
          </span>
        )}
      </Link>
    </nav>
  );
};

export default function Header() {
  const { sheetOpened, toggleMenu } = useMenuStore();

  const toggleSheet = () => {
    toggleMenu(MENU.SHEET);
  };

  return (
    <header className="w-full bg-white flex flex-col lg:flex-row gap-6 items-center justify-center py-4 text-center text-gray-secondary flex-wrap z-10">
      <div className="w-full max-w-default flex md:flex-col lg:flex-row gap-6 items-center justify-between text-center flex-wrap px-default">
        <Link href={PAGE.HOME} aria-label="Ir para página inicial">
          <Image
            src={Logo}
            alt="Logo da marca SAVEBYS"
            className="h-auto w-200"
            width={200}
            height={200}
          />
        </Link>
        <Nav className="hidden md:flex" />
        <Sheet open={sheetOpened} onOpenChange={toggleSheet}>
          <SheetTrigger className="md:hidden">
            <List size={32} />
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between">
            <Nav className="flex-col items-start" onClickLink={toggleSheet} />
            <Image
              src={Logo}
              alt="Logo da marca SAVEBYS"
              className="h-auto w-200"
              width={200}
              height={200}
            />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
