import Link from "next/link";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import list from "./list";

export default function WannaBeCurator() {
  return (
    <section
      id="quero-ser-curador"
      className="bg-white px-default py-8 w-full flex flex-col items-center justify-center gap-8"
    >
      <div className="max-w-default w-full flex flex-col items-center justify-center gap-8">
        <h2 className="title text-title">Quero ser um Curador</h2>
        <p className="text-center text-secondary text-lg max-w-[380px]">
          Os Curadores são parceiros que irão mapear e centralizar as empresas
          afetadas.
        </p>

        <ol className="text-secondary list-inside list-decimal text-lg flex items-start justify-center gap-8 text-center">
          {list.map(({ description }, index) => (
            <li key={description} className="flex flex-col max-w-[175px]">
              <span className="text-title title">{index + 1}.</span>
              {description}
            </li>
          ))}
        </ol>

        <Link
          href="/cadastro-curador"
          className="text-title link hover:border-primary font-bold inline-flex items-center gap-x-1"
        >
          CADASTRE-SE AQUI
          <CaretRight size={16} weight="bold" />
        </Link>
      </div>
    </section>
  );
}
