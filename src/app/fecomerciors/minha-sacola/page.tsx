import { Metadata } from "next";

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
  return (
    <section className="flex flex-col px-default py-3 gap-8 items-center w-full max-w-default min-h-[calc(100vh-260px-120px)]">
      <ProductList />
    </section>
  );
}
