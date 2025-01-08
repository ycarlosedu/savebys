import { howToBuyList, howToSellList } from "./list";

export default function HowItWorks() {
  return (
    <section className="max-w-default px-default py-8 w-full flex flex-col gap-12 mt-6 items-center">
      <h1 className="text-center text-2xl text-gray-secondary max-w-[800px]">
        Somos um Marketplace de Impacto Social, onde nossa missão é ajudar
        microempreendedores e pequenas empresas, em situações de crise, a
        reerguerem seus negócios.
      </h1>

      <section className="flex flex-col gap-8 py-8 items-center">
        <h2 className="font-bold text-primary text-4xl text-center">
          Como vender
        </h2>
        <div className="flex flex-wrap items-start justify-center gap-8 w-full">
          {howToSellList.map((item) => (
            <div
              className="flex flex-col gap-3 w-full max-w-[357px] items-center"
              key={item.title}
            >
              <item.icon size={48} className="text-primary" />
              <h3 className="text-gray-tertiary font-semibold text-2xl text-center">
                {item.title}
              </h3>
              <p className="text-gray-secondary text-lg text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-8 py-8 items-center">
        <h2 className="font-bold text-primary text-4xl text-center">
          Como ser beneficiado
        </h2>
        <div className="flex flex-wrap items-start justify-center gap-8 w-full">
          {howToBuyList.map((item) => (
            <div
              className="flex flex-col gap-3 w-full max-w-[260px] items-center"
              key={item.title}
            >
              <item.icon size={48} className="text-primary" />
              <h3 className="text-gray-tertiary font-semibold text-2xl text-center">
                {item.title}
              </h3>
              <p className="text-gray-secondary text-lg text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
