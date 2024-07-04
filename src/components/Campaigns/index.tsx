import Image from "next/image";

import campaignsList from "./list";

const imageClassName =
  "border-white bg-white border-4 rounded-3xl hover:scale-110 transition-all ease-in-out flex items-center justify-center font-bold text-xl text-primary text-center w-[250px] h-[250px] xs:w-[350px] xs:h-[350px]";

export default function Campaigns() {
  return (
    <section
      id="campanhas"
      className="bg-gradientForms flex flex-col gap-8 items-center py-8 w-full"
    >
      <div className="w-full max-w-default px-default flex flex-col gap-8 items-center">
        <h2 className="title">Nossas Campanhas</h2>
        <div className="flex gap-8 flex-wrap items-center justify-center xl:justify-between max-w-default">
          {campaignsList.map((campaign) => (
            <article key={campaign.id}>
              {campaign.image ? (
                <Image
                  src={campaign.image}
                  width={350}
                  height={350}
                  alt={`Logo da marca ${campaign.name}`}
                  className={imageClassName}
                />
              ) : (
                <div className={imageClassName}>{campaign.name}</div>
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
