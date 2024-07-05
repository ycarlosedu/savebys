export default function PresentationVideo() {
  return (
    <section className="bg-gradientFormsToTop py-8 w-full flex flex-col items-center justify-center">
      <div className="max-w-default px-default w-full flex flex-col items-center justify-center">
        <div className="rounded-3xl overflow-hidden w-full">
          <iframe
            className="w-full bg-white h-[300px] md:h-[639px]"
            width="639"
            height="300"
            src="https://www.youtube.com/embed/UtwtaZwC08M?si=HGP99Qw4f9BT7fkS"
            title="SAVEBYS - Quem somos"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
