import Image from "next/image";
import Link from "next/link";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import campaignsList from "./list";

export default function Campaigns() {
  return (
    <section
      id="campanhas"
      className="flex flex-col gap-8 items-center py-8 px-default max-w-default"
    >
      <h2 className="title">Nossas Campanhas</h2>
      <div className="flex gap-8 flex-wrap items-center justify-center max-w-default">
        {campaignsList.map((campaign) => (
          <article key={campaign.id}>
            {campaign.image ? (
              <Image
                src={campaign.image}
                width={300}
                height={300}
                alt={`Logo da marca ${campaign.name}`}
                className="border-white bg-white border-4 rounded-3xl hover:scale-110 hover:opacity-80 transition-all ease-in-out"
              />
            ) : (
              <div className="border-white bg-white hover:scale-110 hover:opacity-80 transition-all ease-in-out flex items-center justify-center font-bold text-xl text-primary text-center border-4 rounded-3xl w-[300px] h-[300px]">
                {campaign.name}
              </div>
            )}
          </article>
        ))}
      </div>
      <Link
        href="/todas-campanhas"
        className="link inline-flex items-center gap-x-1"
      >
        Confira aqui todas as campanhas
        <CaretRight size={16} weight="bold" />
      </Link>
    </section>
  );
}
