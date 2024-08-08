"use client";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

import { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import { DotButton, useDotButton } from "./CarouselDots";
import campaignsList from "./list";

export default function CampaignsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 })
  ]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  return (
    <div className="embla">
      <div
        className="embla__viewport flex flex-col items-center justify-center gap-6"
        ref={emblaRef}
      >
        <div className="embla__container">
          {campaignsList.map((campaign) => (
            <article
              className="embla__slide bg-white rounded-3xl flex flex-row items-start justify-between p-8 h-[300px]"
              key={campaign.id}
            >
              <div className="flex flex-col gap-4 h-full justify-between">
                <div className="flex flex-col gap-4">
                  <h3 className="text-gray-secondary text-2xl font-bold">
                    {campaign.name}
                  </h3>
                  <p
                    className="text-gray-secondary text-lg"
                    dangerouslySetInnerHTML={{ __html: campaign.description }}
                  ></p>
                </div>
                <Link href={campaign.href} className="link-btn w-fit">
                  Acessar Campanha
                  <CaretRight size={16} />
                </Link>
              </div>
              <Image
                src={campaign.image}
                alt={`Logo da marca ${campaign.name}`}
                width={350}
                height={350}
                className="max-h-[230px]"
              />
            </article>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
