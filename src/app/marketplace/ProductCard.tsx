"use client";
import Image from "next/image";
import Link, { LinkProps } from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/Tooltip";
import { Product } from "@/models/marketplace";
import { tv } from "tailwind-variants";

import { toBrazilianCurrency } from "@/utils/toBrazilianCurrency";

import { PAGE, sliceMaxLength } from "@/constants";

import { ShoppingBag } from "@phosphor-icons/react";

const card = tv({
  base: "border-2 rounded-2xl relative p-6 gap-6 flex flex-col w-full max-w-80 hover:scale-105 cursor-pointer transition-all duration-300",
  variants: {
    hasDiscount: {
      true: "border-primary",
      false: "border-gray-primary"
    }
  }
});

const priceText = tv({
  base: "font-bold text-3xl",
  variants: {
    hasDiscount: {
      true: "text-primary",
      false: "text-gray-primary"
    }
  }
});

type Props = Omit<LinkProps, "href"> & {
  product: Product;
};

export default function ProductCard({ product, ...rest }: Props) {
  return (
    <Link
      href={PAGE.MARKETPLACE.PRODUCT_ID(product.id)}
      className={card({ hasDiscount: Boolean(product.discountPrice) })}
      {...rest}
    >
      {Boolean(product.discountPrice) && (
        <Image
          className="absolute top-4 right-4"
          src="/images/savebys/heart.webp"
          width={32}
          height={32}
          alt="Ícone de coração que identifica itens de impacto"
        />
      )}
      <Image
        src={product.image}
        width={272}
        height={220}
        className="object-contain"
        alt={`Imagem do produto ${product.name}`}
      />
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <p className="font-medium text-xl text-black">
            {sliceMaxLength(product.name, 43)}
          </p>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  // isProductInCart
                  // ? removeFromCart(furniture)
                  // : addToCart(furniture);
                }}
                className="link-btn-secondary min-w-[48px] w-[48px] h-[48px] p-0"
                aria-label={
                  // isProductInCart
                  // ? "Remover item da sacola"
                  // :
                  "Adicionar item ao carrinho"
                }
              >
                {/* {isProductInCart ? ( */}
                {/* <CheckFat size={32} /> */}
                {/* ) : ( */}
                <ShoppingBag size={32} />
                {/* )} */}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              {/* {isProductInCart */}
              {/* ? "Remover item da sacola" */}
              {/* :  */}
              "Adicionar item ao carrinho"
              {/* } */}
            </TooltipContent>
          </Tooltip>
        </div>

        <span className="font-medium text-gray-primary text-xl line-through min-h-7">
          {product.discountPrice ? toBrazilianCurrency(product.price) : ""}
        </span>
        <span
          className={priceText({ hasDiscount: Boolean(product.discountPrice) })}
        >
          {product.discountPrice
            ? toBrazilianCurrency(product.discountPrice)
            : toBrazilianCurrency(product.price)}
        </span>

        <p className="font-medium text-xl text-black">{product.sellerName}</p>
      </div>
    </Link>
  );
}
