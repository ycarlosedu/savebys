import { type NextRequest } from "next/server";

import fixtures from "@/mock/fixtures/fecomerciors.json";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const furniture = fixtures.products.find(
    (product) => product.id === params.id
  );
  console.log("🚀 ~ furniture:", furniture);
  if (!furniture) {
    return Response.error();
  }
  return Response.json(furniture);
}
