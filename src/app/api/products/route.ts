import { type NextRequest } from "next/server";

import fixtures from "@/mock/fixtures/fecomerciors.json";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const page = searchParams.get("page");
  const furnitures = fixtures.products.filter(
    (product) =>
      parseInt(product.id) <= 9 * parseInt(page || "1") &&
      parseInt(product.id) > 9 * (parseInt(page || "1") - 1)
  );
  // const category = searchParams.get('category')
  // if (category) {
  //   const filteredFurnitures = fixtures.furnitures.products.filter((furniture) => furniture.category === category)
  //   return Response.json(filteredFurnitures)
  // }
  return Response.json({
    page,
    pageSize: 9,
    numberOfPages: Math.ceil(fixtures.products.length / 9),
    products: furnitures
  });
}
