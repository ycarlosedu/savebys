export default function PresentationVideo() {
  return (
    <section className="py-8 w-full flex flex-col items-center justify-center">
      <div className="max-w-default px-default w-full flex flex-col items-center justify-center">
        <div className="rounded-3xl overflow-hidden">
          <video
            src="/videos/presentation.mp4"
            controls
            className="w-full bg-white"
            // poster="/images/presentation-poster.webp"
          />
        </div>
      </div>
    </section>
  );
}
