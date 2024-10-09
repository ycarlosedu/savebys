import { Metadata } from "next";
import { Suspense } from "react";

import FurnitureDetailsSkeleton from "./FurnitureDetailsSkeleton";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "SAVEBYS - Detalhes do móvel",
  description:
    "Veja os detalhes do móvel disponível para doação na Mobília Solidária.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
};

export default function FurnitureDetailsLayout({ children }: Props) {
  return (
    <Suspense fallback={<FurnitureDetailsSkeleton />}>{children}</Suspense>
  );
}
