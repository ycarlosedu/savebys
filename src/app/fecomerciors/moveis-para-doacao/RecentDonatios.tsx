import fecomerciorsServices from "@/services/fecomerciors";

import RecentDonatiosCarousel from "./RecentDonatiosCarousel";

export default async function RecentDonations() {
  const donations = await fecomerciorsServices.getRecentDonations();

  return (
    <div className="bg-gray-secondary text-white self-start flex flex-col items-start gap-3 p-4 md:p-8 rounded-[32px] w-full">
      <div className="flex items-center justify-between w-full">
        <h2 className="font-semibold text-2xl md:text-4xl">Doações Recentes</h2>
        <h3 className="text-lg md:text-2xl text-center md:text-start text-gray-minimum">
          Total de móveis doados: {donations.totalDonations}
        </h3>
      </div>
      <RecentDonatiosCarousel furnitures={donations.products} />
    </div>
  );
}
