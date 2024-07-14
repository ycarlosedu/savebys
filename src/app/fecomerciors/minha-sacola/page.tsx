import { Metadata } from "next";
import { cookies } from "next/headers";

import Dialog from "@/components/Dialog";
import { RecipientValuesWithId } from "@/components/Dialog/RecipientForm";

import { COOKIES, getCookies } from "@/constants";

import ProductList from "./ProductList";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Minha Sacola",
    description:
      "Veja os móveis que você selecionou para resgatar na Mobília Solidária!",
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false
      }
    }
  };
}

export default function MyProductsBag() {
  const cookieStore = cookies();
  const recipient: RecipientValuesWithId = getCookies(
    cookieStore,
    COOKIES.RECIPIENT
  );

  return (
    <section className="flex flex-col px-default py-3 gap-8 items-center w-full max-w-default min-h-fecomercio">
      <ProductList />
      <Dialog.RecipientForm recipient={recipient} />
      <Dialog.ReceiveDonationSuccess />
    </section>
  );
}
