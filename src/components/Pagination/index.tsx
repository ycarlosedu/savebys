import Link from "next/link";
import * as React from "react";

import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";

import { cn } from "@/lib/utils";

import {
  PaginationButton,
  PaginationButtonProps,
  paginationButtonVariants
} from "./PaginationButton";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    {...props}
  />
);
Pagination.displayName = "Pagination";

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
));
PaginationContent.displayName = "PaginationContent";

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
));
PaginationItem.displayName = "PaginationItem";

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn("flex h-9 w-9 items-center justify-center", className)}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">Mais páginas</span>
  </span>
);
PaginationEllipsis.displayName = "PaginationEllipsis";

// LINKS

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<PaginationButtonProps, "size"> &
  React.ComponentProps<typeof Link>;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => {
  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className={cn(
        paginationButtonVariants({
          variant: isActive ? "outline" : "default",
          size
        }),
        className
      )}
      {...props}
    />
  );
};
PaginationLink.displayName = "PaginationLink";

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Ir para a página anterior"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Anterior</span>
  </PaginationLink>
);
PaginationPrevious.displayName = "PaginationPrevious";

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Ir para a próxima página"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Próxima</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
);
PaginationNext.displayName = "PaginationNext";

// BUTTONS

type PaginationLinkAsButtonProps = {
  isActive?: boolean;
} & PaginationButtonProps;

const PaginationLinkAsButton = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkAsButtonProps) => {
  return (
    <PaginationButton
      aria-current={isActive ? "page" : undefined}
      className={cn(
        paginationButtonVariants({
          variant: isActive ? "outline" : "default",
          size
        }),
        className
      )}
      {...props}
    />
  );
};
PaginationLinkAsButton.displayName = "PaginationLinkAsButton";

const PaginationPreviousAsButton = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLinkAsButton>) => (
  <PaginationLinkAsButton
    aria-label="Ir para a página anterior"
    size="default"
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Anterior</span>
  </PaginationLinkAsButton>
);
PaginationPreviousAsButton.displayName = "PaginationPreviousAsButton";

const PaginationNextAsButton = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLinkAsButton>) => (
  <PaginationLinkAsButton
    aria-label="Ir para a próxima página"
    size="default"
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span>Próxima</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLinkAsButton>
);
PaginationNextAsButton.displayName = "PaginationNextAsButton";

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationLinkAsButton,
  PaginationNextAsButton,
  PaginationPreviousAsButton
};
