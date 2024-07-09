"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import useMenuStore from "@/stores/menuStore";
import * as Dialog from "@radix-ui/react-dialog";

import { PAGE } from "@/constants";

import { X } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import { ScrollArea } from "../ScrollArea";

type Props = {
  onConfirm: () => void;
};

export default function Dialog_DonateSuccess({ onConfirm }: Props) {
  const { sucessDonateOpened } = useMenuStore();
  const router = useRouter();

  const toggleModal = () => {
    router.push(PAGE.FECOMERCIO.HOME);
  };

  return (
    <Dialog.Root open={sucessDonateOpened} onOpenChange={toggleModal}>
      <Dialog.Portal>
        <Dialog.Overlay className="Dialog_Overlay" />
        <Dialog.Content className="Dialog_Container">
          <ScrollArea className="Scroll_Area">
            <section className="Dialog_Content">
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
            </section>
          </ScrollArea>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}