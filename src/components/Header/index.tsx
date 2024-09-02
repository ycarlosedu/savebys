"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ComponentProps, MouseEvent } from "react";

import useMenuStore, { MENU } from "@/stores/menuStore";

import { cn } from "@/lib/utils";

import { sleep } from "@/constants";

import { List } from "@phosphor-icons/react/dist/ssr";
import Logo from "images/savebys/logo_slogan_gray_cropped.svg";

import ActiveLink from "../ActiveLink";
import { Sheet, SheetContent, SheetTrigger } from "../Sheet";

type Props = ComponentProps<"nav"> & {
  onClickLink?: (event: MouseEvent<HTMLAnchorElement>) => void;
};
const Nav = ({ className, onClickLink, ...props }: Props) => {
  return (
    <nav
      className={cn(
        "flex gap-6 items-center flex-wrap justify-center [&>.link:hover]:border-b-gray-secondary",
        className
      )}
      {...props}
    >
      <ActiveLink onClick={onClickLink} href="/">
        Início
      </ActiveLink>
      <ActiveLink onClick={onClickLink} href="/quem-somos/">
        Quem Somos
      </ActiveLink>
      <ActiveLink onClick={onClickLink} href="#como-funciona">
        Como Funciona
      </ActiveLink>
      <ActiveLink onClick={onClickLink} href="#quero-ser-curador">
        Quero ser um Curador
      </ActiveLink>
      <ActiveLink onClick={onClickLink} href="#contato">
        Contato
      </ActiveLink>
    </nav>
  );
};

export default function Header() {
  const router = useRouter();
  const { sheetOpened, toggleMenu } = useMenuStore();

  const toggleSheet = async () => {
    toggleMenu(MENU.SHEET);
  };

  const handleNavigate = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    toggleSheet();
    await sleep(300);
    const target = e.target as HTMLAnchorElement;
    const href = target.getAttribute("href");
    router.push(href!);
  };

  return (
    <header className="w-full bg-white flex flex-col lg:flex-row gap-6 items-center justify-center py-4 text-center text-gray-secondary flex-wrap border-b-2 border-gray-light z-10">
      <div className="w-full max-w-default flex flex-row gap-6 items-center justify-between md:justify-center lg:justify-between text-center flex-wrap px-default">
        <Image
          src={Logo}
          alt="Logo da marca SAVEBYS"
          className="h-auto w-200"
          width={200}
          height={200}
        />
        <Nav className="hidden md:flex" />
        <Sheet open={sheetOpened} onOpenChange={toggleSheet}>
          <SheetTrigger className="md:hidden">
            <List size={32} />
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between">
            <Nav
              className="flex-col items-start"
              onClickLink={handleNavigate}
            />
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
