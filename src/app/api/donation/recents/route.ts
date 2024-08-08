import fixtures from "@/mock/fixtures/fecomerciors.json";
import { Product } from "@/services/fecomerciors";

import { sleep } from "@/constants";

export async function GET() {
  const furnitures = fixtures.products.filter(
    ({ id }) => parseInt(id) <= 10
  ) as Product[];

  await sleep(1000);

  return Response.json({
    products: furnitures,
    totalDonations: furnitures.length
  });
}
