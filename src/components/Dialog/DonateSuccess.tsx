"use client";

import Button from "@/components/Button";
import * as Dialog from "@radix-ui/react-dialog";

import { X } from "@phosphor-icons/react";
import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import { ScrollArea } from "../ScrollArea";

export default function Dialog_DonateSuccess() {
  return (
    <Dialog.Root
      open={true}
      // onOpenChange={toggleModal}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="Dialog_Overlay" />
        <Dialog.Content className="Dialog_Container">
          {/* @ts-expect-error forward ref error */}
          <ScrollArea className="Scroll_Area" scrollBarClassName="">
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

              <Button color="secondary" className="h-[58px] px-8">
                Cadastrar outro Móvel
                <CaretRight size={16} />
              </Button>
              <Button className="h-[58px] px-8">Fechar</Button>
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
