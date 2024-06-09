export default function PresentationVideo() {
  return (
    <section className="bg-primary px-default py-8 w-full flex flex-col items-center justify-center">
      <div className="max-w-default w-full flex flex-col items-center justify-center">
        <video
          src="/videos/presentation.mp4"
          controls
          className="w-full"
          poster="/images/presentation-poster.png"
        />
      </div>
    </section>
  );
}
