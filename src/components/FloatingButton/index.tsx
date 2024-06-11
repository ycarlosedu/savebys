"use client";
import { ComponentProps, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { scrollToTop } from "@/utils/scrollToTop";

import { ArrowUp } from "@phosphor-icons/react/dist/ssr/ArrowUp";

type Props = ComponentProps<"button"> & {
  showOnlyWhenScroll?: boolean;
};

export function FloatingButton({
  children = <ArrowUp size={24} />,
  showOnlyWhenScroll = true,
  onClick = () => scrollToTop(),
  ...rest
}: Props) {
  const [show, setShow] = useState<boolean>(!showOnlyWhenScroll);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 900 ? setShow(true) : setShow(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
