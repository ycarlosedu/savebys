import Image from "next/image";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/Tooltip";

import supportersList from "./supportersList";

export default function Supporters() {
  return (
    <section
      id="apoiadores"
      className="bg-white px-default pt-16 w-full flex flex-col items-center justify-center gap-8"
    >
      <div className="w-full max-w-default flex flex-col items-center justify-center gap-16">
        <h2 className="title text-title">Apoiadores</h2>

        <div className="flex items-center justify-center flex-wrap gap-20">
          <TooltipProvider>
            {supportersList.map((supporter) => (
              <Tooltip key={supporter.name}>
                <TooltipTrigger asChild>
                  <a href={supporter.href} target="_blank" rel="noreferrer">
                    <Image
                      src={supporter.image}
                      alt={"Logo do apoiador " + supporter.name}
                      width={150}
                      height={150}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{supporter.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
        <hr className="w-full h-[2px] bg-gray-secondary" />
      </div>
    </section>
  );
}
