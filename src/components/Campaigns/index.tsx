import Image from "next/image";
import Link from "next/link";

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/Tooltip";

import campaignsList from "./list";

const containerClassName =
  "border-white bg-white border-4 rounded-3xl flex items-center justify-center w-[250px] xs:w-[350px] h-[250px] xs:h-[350px] hover:scale-110 transition-all ease-in-out";
const imageClassName =
  "flex items-center justify-center font-bold text-xl text-primary text-center";

export default function Campaigns() {
  return (
    <section
      id="campanhas"
      className="bg-gradientForms flex flex-col gap-8 items-center py-8 w-full max-w-[3500px] rounded-t-[32px]"
    >
      <div className="w-full max-w-default px-default flex flex-col gap-8 items-center">
        <h2 className="title">Nossas Campanhas</h2>
        <div className="flex gap-8 flex-wrap items-center justify-center xl:justify-between max-w-default">
          {campaignsList.map((campaign) => (
            <article key={campaign.id}>
              {campaign.image ? (
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/fecomerciors"
                      aria-label={campaign.name}
                      className={containerClassName}
                    >
                      <Image
                        src={campaign.image}
                        width={350}
                        height={350}
                        alt={`Logo da marca ${campaign.name}`}
                        className={imageClassName}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{campaign.name}</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <div className={containerClassName + imageClassName}>
                  {campaign.name}
                </div>
              )}
            </article>
          ))}
        </div>
        {/* <Link href="/todas-campanhas" className="link-btn py-4 px-8">
          Confira aqui todas as campanhas
          <CaretRight size={16} weight="bold" />
        </Link> */}
      </div>
    </section>
  );
}
