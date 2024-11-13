
import ProductBagCard from "@/components/fecomerciors/ProductBagCard";
import ProductCard from "@/components/fecomerciors/ProductCard";
import Footer from "@/components/Footer";
import Banner from "@/components/Marketplace/Banner";
import Header from "@/components/Marketplace/Header";
import Progress from "@/components/Marketplace/Progress";


export default function Marketplace() {
    return (
      <main className="bg-white text-gray-secondary flex min-h-screen flex-col items-center justify-start max-w-[100vw] overflow-x-hidden h-full">
        <Header />
        <Progress />
        <Banner />
        <section className="max-w-default  w-full flex flex-col gap-8">
          <div className=" flex items-center justify-between">
            <h2 className="text-2xl font-bold">Em Destaque</h2>
            <a href="#">Ver mais</a>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Mais Vendidos</h2>
            <a href="#">Ver mais</a>
          </div>
          <img className="max-w-default  w-full" src="\images\marketplace\banner-2.png"></img>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Mais vistos</h2>
            <a href="#">Ver mais</a>
          </div>
        </section>
        <Footer />
      </main>
    );
  }