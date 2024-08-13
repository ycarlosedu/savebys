"use client";
import ProductCardRecent from "@/components/fecomerciors/ProductCardRecent";
import { DonatedProduct } from "@/services/fecomerciors";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

type Props = {
  furnitures: DonatedProduct[];
};
export default function RecentDonatiosCarousel({ furnitures }: Props) {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2000 })
  ]);

  return (
    <div className="embla w-full">
      <div
        className="embla__viewport flex flex-col items-center justify-center gap-1"
        ref={emblaRef}
      >
        <div className="embla__container">
          {furnitures.map((furniture) => (
            <div
              className="embla__slide h-fit md:max-w-[50%] lg:max-w-[33%]"
              key={furniture.description}
            >
              <ProductCardRecent furniture={furniture} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
