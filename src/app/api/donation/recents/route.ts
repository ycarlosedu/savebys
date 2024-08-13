import fixtures from "@/mock/fixtures/fecomerciors.json";
import { DonatedProduct } from "@/services/fecomerciors";

import { sleep } from "@/constants";

export async function GET() {
  const furnitures = fixtures.products
    .filter(({ id }) => parseInt(id) <= 10)
    .map((product) => ({
      description: product.productDescription,
      city: product.city,
      image: product.image,
      donatedQuantity: product.quantity
    })) as DonatedProduct[];

  await sleep(1000);

  return Response.json({
    products: furnitures,
    totalDonations: furnitures.length
  });
}
