import { type NextRequest } from "next/server";

import fixtures from "@/mock/fixtures/fecomerciors.json";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const furniture = fixtures.products.find(
    (product) => product.id === params.id
  );
  if (!furniture) {
    return Response.json({ message: "Product not found" }, { status: 404 });
  }
  return Response.json(furniture);
}
