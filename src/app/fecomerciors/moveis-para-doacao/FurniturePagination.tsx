import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLinkAsButton,
  PaginationNextAsButton,
  PaginationPreviousAsButton
} from "@/components/Pagination";
import { getProductsResponse } from "@/services/fecomerciors";
import useProductStore from "@/stores/productStore";

type Props = {
  furnitures: getProductsResponse;
};

export default function FurniturePagination({ furnitures }: Props) {
  const { goToPage, currentPage } = useProductStore();
  console.log("🚀 ~ FurniturePagination ~ currentPage:", currentPage);

  const pages = Array.from(
    { length: furnitures.numberOfPages },
    (_, i) => i + 1
  );

  return (
    <Pagination>
      <PaginationContent>
        {furnitures.page > 1 && (
          <PaginationItem>
            <PaginationPreviousAsButton
              onClick={() => goToPage(furnitures.page - 1)}
            />
          </PaginationItem>
        )}

        {pages.map((page) => (
          <PaginationItem key={page}>
            <PaginationLinkAsButton
              disabled={page === furnitures.page}
              isActive={page === furnitures.page}
              onClick={() => goToPage(page)}
            >
              {page}
            </PaginationLinkAsButton>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        {furnitures.page < furnitures.numberOfPages && (
          <PaginationItem>
            <PaginationNextAsButton
              onClick={() => goToPage(furnitures.page + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
