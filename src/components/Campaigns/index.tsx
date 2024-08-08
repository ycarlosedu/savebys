import CampaignsCarousel from "./Carousel";

export default function Campaigns() {
  return (
    <section
      id="campanhas"
      className="bg-gradientForms flex flex-col gap-8 items-center py-8 w-full max-w-[3500px] rounded-t-[32px]"
    >
      <div className="w-full max-w-default px-default flex flex-col gap-8 items-center">
        <h2 className="title">Nossas Campanhas Em Andamento</h2>
        <CampaignsCarousel />
        {/* <Link href="/todas-campanhas" className="link-btn py-4 px-8">
          Confira aqui todas as campanhas
          <CaretRight size={16} weight="bold" />
        </Link> */}
      </div>
    </section>
  );
}
