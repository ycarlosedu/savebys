"use client";
import Image from "next/image";
import { useCallback } from "react";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { CaretLeft, CaretRight } from "@phosphor-icons/react/dist/ssr";

import supportersList from "./supportersList";

export default function SupportersCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 })
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="embla overflow-visible">
      <div
        className="embla__viewport flex flex-col items-center justify-center gap-6"
        ref={emblaRef}
      >
        <div className="embla__container">
          {supportersList.map((supporter) => (
            <div className="embla__slide" key={supporter.name}>
              <Tooltip>
                <TooltipTrigger>
                  <a
                    href={supporter.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-[150px] h-[150px] flex items-center"
                  >
                    <Image
                      src={supporter.image}
                      alt={"Logo do apoiador " + supporter.name}
                      width={150}
                      height={150}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-gray-secondary">{supporter.name}</p>
                </TooltipContent>
              </Tooltip>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-6">
          <button className="embla__prev link-btn" onClick={scrollPrev}>
            <CaretLeft size={24} />
          </button>
          <button className="embla__next link-btn" onClick={scrollNext}>
            <CaretRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
