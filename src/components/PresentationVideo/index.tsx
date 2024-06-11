export default function PresentationVideo() {
  return (
    <section className="px-default py-8 w-full flex flex-col items-center justify-center">
      <div className="max-w-default w-full flex flex-col items-center justify-center rounded-3xl overflow-hidden">
        <video
          src="/videos/presentation.mp4"
          controls
          className="w-full bg-white"
          poster="/images/presentation-poster.png"
        />
      </div>
    </section>
  );
}
