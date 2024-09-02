import { monetaryList, productList } from "./list";

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="max-w-default w-full py-8 flex flex-col gap-12 items-center px-default"
    >
      <h2 className="title">Como Funciona</h2>
      <div className="flex flex-col gap-8">
        <h3 className="text-center font-bold text-2xl">
          Campanhas de doação monetária
        </h3>
        <div className="flex flex-wrap items-start justify-center gap-8">
          {monetaryList.map((item) => (
            <div
              className="flex flex-col gap-3 w-[260px] items-center"
              key={item.title}
            >
              <item.icon size={48} className="text-primary" />
              <h3 className="text-gray-tertiary font-semibold text-2xl">
                {item.title}
              </h3>
              <p className="text-gray-secondary text-lg text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-center font-bold text-2xl">
          Campanhas de doação de produtos
        </h3>
        <div className="flex flex-wrap items-start justify-center gap-8">
          {productList.map((item) => (
            <div
              className="flex flex-col gap-3 w-[260px] items-center"
              key={item.title}
            >
              <item.icon size={48} className="text-primary" />
              <h3 className="text-gray-tertiary font-semibold text-2xl">
                {item.title}
              </h3>
              <p className="text-gray-secondary text-lg text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
