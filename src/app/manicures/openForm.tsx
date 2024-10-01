"use client";
import Button from "@/components/Button";
import useMenuStore, { MENU } from "@/stores/menuStore";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export default function OpenForm() {
  const { toggleMenu } = useMenuStore();

  return (
    <div className="flex flex-col gap-4 pt-8 md:flex-row md:gap-8 items-center justify-center px-default">
      <Button className="h-[58px]" onClick={() => toggleMenu(MENU.BUYER_FORM)}>
        CADASTRE-SE AQUI
        <CaretRight size={16} />
      </Button>
    </div>
  );
}
