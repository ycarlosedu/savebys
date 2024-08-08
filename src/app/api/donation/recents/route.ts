import fixtures from "@/mock/fixtures/fecomerciors.json";
import { Product } from "@/services/fecomerciors";

export async function GET() {
  const furnitures = fixtures.products.filter(
    ({ id }) => parseInt(id) <= 10
  ) as Product[];

  return Response.json({
    products: furnitures,
    totalDonations: furnitures.length
  });
}
