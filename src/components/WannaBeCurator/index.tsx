import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import list from "./list";

export default function WannaBeCurator() {
  return (
    <section
      id="quero-ser-curador"
      className="px-default pt-16 pb-20 w-full flex flex-wrap max-w-default items-center justify-center gap-8"
    >
      {list.map((item) => (
        <div
          key={item.title}
          className="flex flex-col bg-gray-light gap-8 p-8 items-center w-[350px] rounded-[32px]"
        >
          <h2
            className="font-bold text-gray-tertiary text-3xl text-center"
            dangerouslySetInnerHTML={{ __html: item.title }}
          ></h2>
          <p className="text-center text-gray-secondary text-lg max-w-[380px]">
            {item.description}
          </p>

          <a
            target="_blank"
            aria-label={item.ariaLabel}
            href={item.href}
            className="link-btn py-4 px-8"
            rel="noreferrer"
          >
            {item.action}
            <CaretRight size={16} weight="bold" />
          </a>
        </div>
      ))}
    </section>
  );
}
