import Script from "next/script";

export default function PresentationVideo() {
  return (
    <section className="bg-gradientFormsToTop py-8 w-full flex flex-col items-center justify-center">
      <Script src="https://player.vimeo.com/api/player.js" />

      <div className="max-w-default px-default w-full flex flex-col items-center justify-center">
        <div className="rounded-3xl overflow-hidden w-full">
          <iframe
            src="https://player.vimeo.com/video/976569934?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
            className="w-full bg-white h-[300px] md:h-[639px]"
            title="Apresentação da Empresa SaveBys"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
