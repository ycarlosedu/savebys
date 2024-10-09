"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/ui/Button";
import useMenuStore, { MENU } from "@/stores/menuStore";
import * as Dialog from "@radix-ui/react-dialog";

import { PAGE } from "@/constants";

import { X } from "@phosphor-icons/react";

export default function Dialog_ReceiveDonationSuccess() {
  const { sucessReceiveDonationOpened, toggleMenu } = useMenuStore();
  const router = useRouter();

  const toggleModal = () => {
    toggleMenu(MENU.RECEIVE_SUCESS_DONATION);
    router.push(PAGE.FECOMERCIO.HOME);
  };

  return (
    <Dialog.Root open={sucessReceiveDonationOpened} onOpenChange={toggleModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="Dialog_Overlay" />
        <Dialog.Content className="Dialog_Container">
          <Dialog.Title className="Dialog_Title">
            Sucesso
            <span className="text-primary">!</span>
          </Dialog.Title>
          <Dialog.Description className="Dialog_Description">
            Obrigado por mostrar interesse! <br />
            Entraremos em contato o mais rápido possível.
          </Dialog.Description>

          <Button className="h-[58px] px-8" onClick={toggleModal}>
            OK
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
