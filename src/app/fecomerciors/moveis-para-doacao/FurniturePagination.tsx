import React from "react";

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

  const pages = Array.from(
    { length: furnitures.numberOfPages },
    (_, i) => i + 1
  );

  const showedPages = pages.filter((page) => {
    return (
      page === 1 ||
      page === 2 ||
      page === furnitures.numberOfPages ||
      page === furnitures.numberOfPages - 1 ||
      page === currentPage ||
      page === currentPage - 1 ||
      page === currentPage + 1
    );
  });

  return (
    <Pagination>
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPreviousAsButton
              onClick={() => goToPage(currentPage - 1)}
            />
          </PaginationItem>
        )}

        {pages.map((page) => {
          const showPage = showedPages.find((p) => p === page);
          const showNextEllipsis = !showedPages.find(
            (p) => p === page + 1 || page === furnitures.numberOfPages
          );
          if (!showPage) return null;
          return (
            <React.Fragment key={page}>
              <PaginationItem>
                <PaginationLinkAsButton
                  disabled={page === currentPage}
                  isActive={page === currentPage}
                  onClick={() => goToPage(page)}
                >
                  {page}
                </PaginationLinkAsButton>
              </PaginationItem>
              {showNextEllipsis && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
            </React.Fragment>
          );
        })}

        {currentPage < furnitures.numberOfPages && (
          <PaginationItem>
            <PaginationNextAsButton onClick={() => goToPage(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
