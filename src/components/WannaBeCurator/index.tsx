import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import list from "./list";

export default function WannaBeCurator() {
  return (
    <section
      id="quero-ser-curador"
      className="bg-gray-tertiary px-default py-8 w-full flex flex-col items-center justify-center gap-8"
    >
      <div className="max-w-default w-full flex flex-col items-center justify-center gap-8">
        <h2 className="title text-title">Quero ser um Curador</h2>
        <p className="text-center text-white text-lg max-w-[380px]">
          Os Curadores são parceiros que irão mapear e centralizar as empresas
          afetadas.
        </p>

        <ol className="text-white list-inside list-decimal text-lg flex items-start justify-center gap-8 text-center flex-wrap">
          {list.map(({ description }, index) => (
            <li key={description} className="flex flex-col max-w-[175px]">
              <span className="text-title title">{index + 1}.</span>
              {description}
            </li>
          ))}
        </ol>

        <a
          target="_blank"
          aria-label="Cadastrar-se como curador de uma campanha SAVEBYS"
          href="https://docs.google.com/forms/d/e/1FAIpQLSckb6kMK6yb3yXZnkBKPxarfiEy_IF_LDP5v_PDXkE3L9ofEQ/viewform?usp=sharing"
          className="link-btn py-4 px-8"
          rel="noreferrer"
        >
          CADASTRE-SE AQUI
          <CaretRight size={16} weight="bold" />
        </a>
      </div>
    </section>
  );
}
