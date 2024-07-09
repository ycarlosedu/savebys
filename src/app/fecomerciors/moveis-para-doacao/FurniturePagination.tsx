import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/Pagination";
import { getProductsResponse } from "@/services/fecomerciors";

type Props = {
  furnitures: getProductsResponse;
};

export default function FurniturePagination({ furnitures }: Props) {
  const pages = Array.from(
    { length: furnitures.numberOfPages },
    (_, i) => i + 1
  );

  return (
    <Pagination>
      <PaginationContent>
        {furnitures.page > 1 && (
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
        )}

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLink href="#" isActive={page === furnitures.page}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        {furnitures.page < furnitures.numberOfPages && (
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
