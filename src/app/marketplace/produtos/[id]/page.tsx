import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { CompleteProduct } from "@/models/marketplace";

import featuredProducts from "../../featured-products";
import ProductDetails from "./ProductDetails";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let product: CompleteProduct | undefined;
  try {
    if (isNaN(parseInt(params.id))) {
      return notFound();
    }
    product = featuredProducts.find((product) => product.id === params.id);

    if (!product) {
      return notFound();
    }
  } catch (error) {
    return notFound();
  }

  return {
    title: "SAVEBYS - " + product.description
  };
}

export default function ProductById({ params }: Props) {
  const product = featuredProducts.find((product) => product.id === params.id)!;

  return (
    <section className="max-w-default px-default py-8 w-full flex flex-col gap-12 mt-6 items-center">
      <Suspense>
        <ProductDetails product={product} />
      </Suspense>
    </section>
  );
}
