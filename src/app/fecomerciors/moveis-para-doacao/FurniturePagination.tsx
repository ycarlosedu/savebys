import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLinkAsButton,
  PaginationNextAsButton,
  PaginationPreviousAsButton
} from "@/components/ui/Pagination";
import useProductStore from "@/stores/productStore";

export default function FurniturePagination() {
  const { goToPage, currentPage, totalPages } = useProductStore();

  if (totalPages <= 1) return null;

  const actualPage = currentPage + 1;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const showedPages = pages.filter((page) => {
    return (
      page === 1 ||
      page === 2 ||
      page === totalPages ||
      page === totalPages - 1 ||
      page === actualPage ||
      page === actualPage - 1 ||
      page === actualPage + 1
    );
  });

  return (
    <Pagination>
      {actualPage > 1 && (
        <PaginationPreviousAsButton onClick={() => goToPage(currentPage - 1)} />
      )}
      <PaginationContent>
        {pages.map((page) => {
          const showPage = showedPages.find((p) => p === page);
          const showNextEllipsis = !showedPages.find(
            (p) => p === page + 1 || page === totalPages
          );
          if (!showPage) return null;
          return (
            <React.Fragment key={page}>
              <PaginationItem>
                <PaginationLinkAsButton
                  disabled={page === actualPage}
                  isActive={page === actualPage}
                  onClick={() => goToPage(page - 1)}
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
      </PaginationContent>
      {actualPage < totalPages && (
        <PaginationNextAsButton onClick={() => goToPage(currentPage + 1)} />
      )}
    </Pagination>
  );
}
