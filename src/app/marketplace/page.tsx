import Image from "next/image";

import Banner from "@/components/marketplace/Banner";
import Progress from "@/components/marketplace/Progress";

import featuredProducts from "./featured-products";
import ProductList from "./ProductList";

export default function Marketplace() {
  return (
    <>
      <Progress />
      <section className="max-w-default px-default w-full flex flex-col gap-8 mt-8">
        <Banner />
        <div className=" flex items-center justify-between">
          <h2 className="text-2xl font-bold">Em Destaque</h2>
          <a href="#" className="hover:underline">
            Ver mais
          </a>
        </div>
        <ProductList products={featuredProducts} />
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Mais Vendidos</h2>
          <a href="#" className="hover:underline">
            Ver mais
          </a>
        </div>
        <ProductList products={featuredProducts} />
        <Image
          className="max-w-default w-full rounded-[32px]"
          src="/images/marketplace/banner-2.png"
          width={1200}
          height={300}
          alt="Banner do marketplace"
        />
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Mais vistos</h2>
          <a href="#" className="hover:underline">
            Ver mais
          </a>
        </div>
        <ProductList products={featuredProducts} />
      </section>
    </>
  );
}
