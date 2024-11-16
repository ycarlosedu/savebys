import Image from "next/image";

import Footer from "@/components/Footer";
import Banner from "@/components/marketplace/Banner";
import Header from "@/components/marketplace/Header";
import Progress from "@/components/marketplace/Progress";

export default function Marketplace() {
  return (
    <main className="bg-white text-gray-secondary flex min-h-screen flex-col items-center justify-start max-w-[100vw] overflow-x-hidden h-full">
      <Header />
      <Progress />
      <section className="max-w-default w-full flex flex-col gap-8 mt-8">
        <Banner />
        <div className=" flex items-center justify-between">
          <h2 className="text-2xl font-bold">Em Destaque</h2>
          <a href="#">Ver mais</a>
        </div>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Mais Vendidos</h2>
          <a href="#">Ver mais</a>
        </div>
        <Image
          className="max-w-default w-full rounded-[32px]"
          src="/images/marketplace/banner-2.png"
          width={1200}
          height={300}
          alt="Banner do marketplace"
        />
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Mais vistos</h2>
          <a href="#">Ver mais</a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
