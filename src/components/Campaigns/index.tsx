import Image from "next/image";
import Link from "next/link";

import campaignsList from "./list";

export default function Campaigns() {
  return (
    <section
      id="campanhas"
      className="flex flex-col gap-8 items-center py-8 px-default max-w-default"
    >
      <h2 className="title">Nossas Campanhas</h2>
      <div className="flex gap-8 flex-wrap items-center justify-center max-w-[800px]">
        {campaignsList.map((campaign) => (
          <article key={campaign.name}>
            {campaign.image ? (
              <Image
                src={campaign.image}
                width={200}
                height={200}
                alt={`Logo da marca ${campaign.name}`}
                className="border-white bg-white border-4 rounded-3xl"
              />
            ) : (
              <div className="border-white bg-white flex items-center justify-center font-bold text-xl text-primary text-center border-4 rounded-3xl w-[200px] h-[200px]">
                {campaign.name}
              </div>
            )}
          </article>
        ))}
      </div>
      <Link className="underline text-center text-lg" href="/todas-campanhas">
        Confira aqui todas as campanhas
      </Link>
    </section>
  );
}
