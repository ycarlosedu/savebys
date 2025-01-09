"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { CompleteProduct } from "@/models/marketplace";

import { PAGE } from "@/constants";

import {
  CaretLeft,
  CaretRight,
  Prohibit
} from "@phosphor-icons/react/dist/ssr";

export type Props = {
  product: CompleteProduct;
};
export default function ProductDetails({ product }: Props) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history?.length && window.history.length > 1) {
      return router.back();
    }

    return router.replace(PAGE.MARKETPLACE.PRODUCTS);
  };

  return (
    <div className="flex flex-col gap-8 items-start w-full">
      <div className="flex flex-col md:flex-row justify-between gap-6 items-start w-full">
        <Image
          src={product.image}
          alt={`Imagem do móvel ${product.id}: ${product.description}`}
          width={625}
          height={625}
          className="w-full max-w-[625px] h-full max-h-[625px] rounded-xl aspect-square"
        />
        <div className="flex flex-col gap-6 w-full max-w-[515px]">
          <Button
            onClick={handleBack}
            className="link-btn-secondary px-8 w-fit h-[58px]"
          >
            <CaretLeft size={16} />
            Voltar
          </Button>
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl">
            Produto disponibilizado por: {product.sellerName}
          </p>
          <p className="text-2xl">Onde retirar: {product.city}</p>
          <p>{product.description}</p>
          <p>Informações: {product.infos}</p>
          <p>Quantidade disponível: {product.quantity}</p>
          {product.quantity === 0 ? (
            <Button disabled aria-disabled className="h-[58px]">
              Produto indisponível
              <Prohibit size={16} />
            </Button>
          ) : (
            <Button
              className="h-[58px]"
              onClick={() => {
                // isProductInCart ? removeFromCart(product) : addToCart(product);
              }}
            >
              {/* {isProductInCart */}
              {/* ? "Remover item da sacola" */}
              {/* :  */}
              "Adicionar item ao carrinho"
              {/* } */}
              <CaretRight size={16} />
            </Button>
          )}
        </div>
      </div>

      {/* <div className="flex flex-wrap gap-4 items-start w-full"> */}
      <Accordion
        type="multiple"
        className="w-full flex flex-wrap gap-4 items-start"
      >
        <AccordionItem
          className="w-full max-w-[560px] rounded-lg border border-gray-secondary p-4 flex flex-col gap-2"
          value="technicalDetails"
        >
          <AccordionTrigger className="text-lg p-0">
            Detalhes técnicos
          </AccordionTrigger>
          <AccordionContent className="flex flex-col p-0">
            <span>Cor: {product.technicalDetails.color}</span>
            <span>Peso do produto: {product.technicalDetails.weight}</span>
            <span>Condição: {product.technicalDetails.condition}</span>
            <span>Ean: {product.technicalDetails.ean}</span>
            <span>
              Dimensões do produto: {product.technicalDetails.dimensions}
            </span>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          className="w-full max-w-[560px] rounded-lg border border-gray-secondary p-4 flex flex-col gap-2"
          value="additionalInfos"
        >
          <AccordionTrigger className="text-lg p-0">
            Informações adicionais
          </AccordionTrigger>
          <AccordionContent className="flex flex-col p-0">
            <span>Marcas de uso: {product.additionalInfos.signsOfUse}</span>
            <span>
              Tempo de utilização: {product.additionalInfos.usageTime}
            </span>
            <span>
              Cuidados recomendados: {product.additionalInfos.recommendedCare}
            </span>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      {/* </div> */}
    </div>
  );
}
