export default function PresentationVideo() {
  return (
    <section className="bg-gradientFormsToTop py-8 w-full flex flex-col items-center justify-center">
      <div className="max-w-default px-default w-full flex flex-col items-center justify-center">
        <div className="rounded-3xl overflow-hidden">
          <video
            src="/videos/presentation.m4v"
            controls
            className="w-full bg-white h-[639px]"
            poster="/images/savebys/logo-savebys-gray-slogan-cropped.webp"
            width={1200}
            height={639}
          />
        </div>
      </div>
    </section>
  );
}
