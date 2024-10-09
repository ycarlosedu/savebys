"use client";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { twMerge } from "tailwind-merge";

type ActiveLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

export default function ActiveLink({
  className,
  href,
  ...props
}: ActiveLinkProps) {
  const pathname = usePathname();
  const isActive = href === pathname;

  return (
    <Link
      href={href}
      className={twMerge("link", className)}
      {...props}
      data-active={isActive}
    />
  );
}
