import { ComponentProps } from "react";

import { Product } from "@/models/marketplace";

import ProductCard from "./ProductCard";

type Props = ComponentProps<"section"> & {
  products: Product[];
};

export default function ProductList({ products, ...rest }: Props) {
  return (
    <section
      className="flex flex-col gap-8 flex-start w-full items-center justify-center md:flex-row md:flex-wrap xl:justify-between"
      {...rest}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
