import { Suspense } from "react";

import FurnitureDetailsSkeleton from "./FurnitureDetailsSkeleton";

type Props = {
  children: React.ReactNode;
};

export default function FurnitureDetailsLayout({ children }: Props) {
  return (
    <Suspense fallback={<FurnitureDetailsSkeleton />}>{children}</Suspense>
  );
}
