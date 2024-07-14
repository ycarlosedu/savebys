import { Metadata } from "next";
import Image from "next/image";

import fecomerciorsServices from "@/services/fecomerciors";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient
} from "@tanstack/react-query";

import FurnitureFilter from "./FurnitureFilter";
import FurnitureList from "./FurnitureList";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Móveis disponíveis para doação na Mobília Solidária",
    description:
      "Veja os móveis disponíveis para doação para negócios do Rio Grande do Sul afetados pelas enchentes. Caso você necessite, solicite uma doação e deixe-nos ajudar!",
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
          url: "https://www.savebys.com/images/campaigns/fecomerciors/banner-1265x340.png",
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
      <Image
        src="/images/campaigns/fecomerciors/banner-1265x340.png"
        alt="Banner da campanha Mobília Solidária"
        width={1265}
        height={340}
        className="w-[1265px] h-[180px] object-none xs:h-[340px] xs:object-cover"
      />

      <FurnitureFilter />
      <HydrationBoundary state={dehydratedState}>
        <FurnitureList />
      </HydrationBoundary>
    </section>
  );
}
