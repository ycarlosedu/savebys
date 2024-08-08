import fecomerciorsServices from "@/services/fecomerciors";

import RecentDonatiosCarousel from "./RecentDonatiosCarousel";

export default async function RecentDonations() {
  const donations = await fecomerciorsServices.getRecentDonations();

  return (
    <div className="bg-gray-secondary text-white self-start flex flex-col items-start gap-3 p-4 md:p-8 rounded-[32px] w-full md:w-1/2">
      <h2 className="font-semibold text-2xl md:text-4xl">Doações Recentes</h2>
      <RecentDonatiosCarousel furnitures={donations.products} />
      <p>Número de móveis doados: {donations.totalDonations}</p>
    </div>
  );
}
