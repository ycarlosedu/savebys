"use client";
import React, { ComponentProps, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { scrollToTop } from "@/utils/scrollToTop";

import { ArrowUp } from "@phosphor-icons/react/dist/ssr/ArrowUp";

export const GLOBAL_SCROLL_ID = "global-scroll";
export const GLOBAL_SCROLL_QUERY = `#${GLOBAL_SCROLL_ID} > #scroll-area`;

type Props = ComponentProps<"button"> & {
  showOnlyWhenScroll?: boolean;
};

export function FloatingButton({
  children = <ArrowUp size={24} />,
  showOnlyWhenScroll = true,
  onClick = () => scrollToTop({ element: GLOBAL_SCROLL_QUERY }),
  ...rest
}: Props) {
  const [show, setShow] = useState<boolean>(!showOnlyWhenScroll);

  useEffect(() => {
    if (!showOnlyWhenScroll) return;

    const handleScroll = (event: Event) => {
      const element = event.target as HTMLDivElement;
      element.scrollTop > 900 ? setShow(true) : setShow(false);
    };

    const globalScroll = document.querySelector(GLOBAL_SCROLL_QUERY);

    globalScroll?.addEventListener("scroll", handleScroll);

    return () => {
      globalScroll?.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const translate = show ? "translate-x-0" : "translate-x-[200vw]";

  return (
    <button
      onClick={onClick}
      className={cn(["link-btn", "floating", translate])}
      {...rest}
    >
      {children}
    </button>
  );
}
