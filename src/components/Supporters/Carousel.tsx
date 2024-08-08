"use client";
import Image from "next/image";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import supportersList from "./supportersList";

export default function SupportersCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 2000 })
  ]);

  return (
    <div className="embla">
      <div
        className="embla__viewport flex flex-col items-center justify-end h-[190px] gap-6"
        ref={emblaRef}
      >
        <div className="embla__container">
          {supportersList.map((supporter) => (
            <div
              className="embla__slide max-w-full md:max-w-[50%] lg:max-w-[33%]"
              key={supporter.name}
            >
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
      </div>
    </div>
  );
}
