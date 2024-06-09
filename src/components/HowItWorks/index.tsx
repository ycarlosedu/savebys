import Flux from "@/components/Flux";

import list from "./fluxList";

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="bg-tertiary bg-opacity-70 w-full py-20 flex flex-col gap-8 items-center px-default"
    >
      <div className="max-w-default flex flex-col gap-8 items-center">
        <h2 className="title">Como Funciona</h2>
        <Flux list={list} />
      </div>
    </section>
  );
}
