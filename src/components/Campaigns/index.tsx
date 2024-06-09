import Image from "next/image";
import campaignsList from "./list";
import Link from "next/link";

export default function Campaigns() {
  return (
    <section className="flex flex-col gap-8 items-center py-8 px-default max-w-default">
      <h2 className="font-bold text-3xl text-center">Nossas Campanhas</h2>
      <div className="flex gap-8 flex-wrap items-center justify-center">
        {campaignsList.map((campaign) => (
          <article key={campaign.name}>
            <Image
              src={campaign.image}
              width={200}
              height={200}
              alt={`Logo da marca ${campaign.name}`}
              className="border-white border-4"
            />
          </article>
        ))}
      </div>
      <Link className="underline text-center" href="/todas-campanhas">
        Confira todas as campanhas
      </Link>
    </section>
  );
}
