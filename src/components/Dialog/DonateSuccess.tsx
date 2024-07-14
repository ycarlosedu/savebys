"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import useMenuStore, { MENU } from "@/stores/menuStore";
import * as Dialog from "@radix-ui/react-dialog";

import { PAGE } from "@/constants";

import { X } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

type Props = {
  onConfirm: () => void;
};

export default function Dialog_DonateSuccess({ onConfirm }: Props) {
  const { sucessDonateOpened, toggleMenu } = useMenuStore();
  const router = useRouter();

  const toggleModal = () => {
    toggleMenu(MENU.SUCESS_DONATE);
    router.push(PAGE.FECOMERCIO.HOME);
  };

  return (
    <Dialog.Root open={sucessDonateOpened} onOpenChange={toggleModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="Dialog_Overlay" />
        <Dialog.Content className="Dialog_Container">
          <Dialog.Title className="Dialog_Title">
            Sucesso
            <span className="text-primary">!</span>
          </Dialog.Title>
          <Dialog.Description className="Dialog_Description">
            Seu móvel foi cadastrado! <br />
            Quando alguém mostrar interesse, entraremos em contato. <br />
            Obrigado por fazer parte do nosso projeto!
          </Dialog.Description>

          <Button
            color="secondary"
            className="h-[58px] px-8"
            onClick={onConfirm}
          >
            Cadastrar outro Móvel
            <CaretRight size={16} />
          </Button>
          <Button className="h-[58px] px-8" onClick={toggleModal}>
            Fechar
          </Button>
          <Dialog.Close asChild>
            <button className="Dialog_CloseButton" aria-label="Close">
              <X size={32} />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
