import SupportersCarousel from "./Carousel";

export default function Supporters() {
  return (
    <section
      id="apoiadores"
      className="bg-white px-default pt-16 w-full flex flex-col items-center justify-center gap-8"
    >
      <div className="w-full max-w-[800px] flex flex-col items-center justify-center gap-16">
        <h2 className="title text-title">Apoiadores</h2>

        <SupportersCarousel />
        <hr className="w-full h-[2px] bg-gray-secondary" />
      </div>
    </section>
  );
}
