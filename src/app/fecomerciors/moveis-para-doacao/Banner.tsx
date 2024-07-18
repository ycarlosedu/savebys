"use client";
import Image from "next/image";

import useMobileDetect from "@/hooks/useMobileDetect";

import bigBanner from "images/campaigns/fecomerciors/banner-1265x340.webp";
import smallBanner from "images/campaigns/fecomerciors/banner-900x560.webp";

export default function Banner() {
  const currentDevice = useMobileDetect();

  if (currentDevice.isMobile()) {
    return (
      <Image
        src={smallBanner}
        alt="Banner da campanha Mobília Solidária"
        width={900}
        height={560}
        className="max-w-[1265px] w-full object-contain"
        priority
      />
    );
  }

  return (
    <Image
      src={bigBanner}
      alt="Banner da campanha Mobília Solidária"
      width={1265}
      height={340}
      className="max-w-[1265px] w-full object-contain"
      priority
    />
  );
}
