"use client";
import ProductCardRecent from "@/components/fecomerciors/ProductCardRecent";
import { Product } from "@/services/fecomerciors";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type Props = {
  furnitures: Product[];
};
export default function RecentDonatiosCarousel({ furnitures }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 })
  ]);

  return (
    <div className="embla">
      <div
        className="embla__viewport flex flex-col items-center justify-center gap-1"
        ref={emblaRef}
      >
        <div className="embla__container">
          {furnitures.map((furniture) => (
            <div className="embla__slide h-fit" key={furniture.id}>
              <ProductCardRecent furniture={furniture} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
