import { Metadata } from "next";
// import dynamic from "next/dynamic";

import fecomerciorsServices from "@/services/fecomerciors";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";

// const Banner = dynamic(() => import("./Banner"), { ssr: false });
import Banner from "./Banner";
import FurnitureFilter from "./FurnitureFilter";
import FurnitureList from "./FurnitureList";
import RecentDonations from "./RecentDonatios";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Móveis disponíveis para doação na Mobília Solidária",
    description:
      "Veja os móveis disponíveis para doação para negócios do Rio Grande do Sul afetados pelas enchentes. Caso você necessite, solicite uma doação e deixe-nos ajudar!",
    alternates: {
      canonical: "https://savebys.com/fecomerciors/moveis-para-doacao"
    },
    openGraph: {
      title: "SAVEBYS - Móveis disponíveis para doação na Mobília Solidária",
      description:
        "Veja os móveis disponíveis para doação para negócios do Rio Grande do Sul afetados pelas enchentes. Caso você necessite, solicite uma doação e deixe-nos ajudar!",
      url: "https://www.savebys.com/fecomerciors/moveis-para-doacao",
      siteName: "SAVEBYS",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: "https://www.savebys.com/images/campaigns/fecomerciors/banner-1265x340.webp",
          width: 1265,
          height: 340
        }
      ]
    }
  };
}

export default async function FurnituresToDonation() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: () => fecomerciorsServices.getProducts()
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <section className="flex flex-col py-12 px-default gap-6 items-center w-full max-w-[1282px]">
      <Banner />

      <div className="flex justify-between w-full gap-8">
        <FurnitureFilter />
        <RecentDonations />
      </div>
      <HydrationBoundary state={dehydratedState}>
        <FurnitureList />
      </HydrationBoundary>
    </section>
  );
}
