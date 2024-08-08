import ProductCardRecent from "@/components/fecomerciors/ProductCardRecent";
import fecomerciorsServices from "@/services/fecomerciors";

export default async function RecentDonations() {
  const donations = await fecomerciorsServices.getRecentDonations();

  return (
    <div className="bg-gray-secondary text-white self-start flex flex-col items-start gap-3 p-4 md:p-8 rounded-[32px]">
      <h2 className="font-semibold text-2xl md:text-4xl">Doações Recentes</h2>
      <ProductCardRecent furniture={donations.products[0]} />
    </div>
  );
}
