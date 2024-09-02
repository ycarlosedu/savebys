import { CaretRight } from "@phosphor-icons/react/dist/ssr";

import contactMethods from "./contactList";

export default function Contact() {
  return (
    <section
      className="px-default w-full flex items-center justify-center gap-8"
      id="contato"
    >
      <div className="bg-gray-light pt-8 pb-16 rounded-b-3xl flex flex-col text-gray-secondary lg:flex-row justify-center w-full max-w-default mx-auto px-default text-gray-600 gap-12 md:px-8">
        <div className="max-w-md">
          <h3 className="text-primary text-3xl font-semibold">
            Entre em contato
          </h3>
          <p className="mt-3">
            Nós estamos aqui para ajudar e estamos disponíveis para responder
            qualquer pergunta que você possa ter, estamos ansiosos para ouvir de
            você.
          </p>
        </div>
        <div>
          <ul className="mt-12 gap-y-6 gap-x-12 items-center md:flex lg:gap-x-0 lg:mt-0">
            {contactMethods.map(({ Icon, ...item }) => (
              <li
                key={item.title}
                className="space-y-3 border-t py-6 md:max-w-sm lg:border-t-0 lg:border-l lg:px-12 lg:max-w-none"
              >
                <div className="w-12 h-12 rounded-full border flex items-center justify-center">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-medium xl:text-xl">{item.title}</h4>
                <p>{item.desc}</p>
                <a
                  href={item.link.href}
                  target="_blank"
                  className="link text-sm font-medium"
                  rel="noreferrer"
                >
                  {item.link.name}
                  <CaretRight size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
