import CampaignsCarousel from "./Carousel";

export default function Campaigns() {
  return (
    <section
      id="campanhas"
      className="flex flex-col gap-8 items-center py-8 w-full max-w-[3500px] rounded-t-[32px]"
    >
      <div className="w-full max-w-default px-default flex flex-col gap-8 items-center">
        <h2 className="title">Campanhas</h2>
        <CampaignsCarousel />
      </div>
    </section>
  );
}
