import { type NextRequest } from "next/server";

import fixtures from "@/mock/fixtures/fecomerciors.json";
import { Product } from "@/services/fecomerciors";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "0" + 1);
  const category = searchParams.get("category");

  let furnitures = [] as Product[];

  if (!category) {
    furnitures = fixtures.products.filter(
      (product) =>
        parseInt(product.id) <= 9 * page &&
        parseInt(product.id) > 9 * (page - 1)
    );
  }

  if (category) {
    furnitures = fixtures.products.filter(
      (furniture) => furniture.productType === category
    );
  }

  return Response.json({
    pageable: {
      pageNumber: page,
      pageSize: 9
    },
    totalPages: Math.ceil(fixtures.products.length / 9),
    content: furnitures
  });
}
