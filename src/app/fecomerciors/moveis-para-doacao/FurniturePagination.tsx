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
import useProductStore from "@/stores/productStore";

export default function FurniturePagination() {
  const { goToPage, currentPage, totalPages } = useProductStore();

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const showedPages = pages.filter((page) => {
    return (
      page === 1 ||
      page === 2 ||
      page === totalPages ||
      page === totalPages - 1 ||
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
            (p) => p === page + 1 || page === totalPages
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

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNextAsButton onClick={() => goToPage(currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
