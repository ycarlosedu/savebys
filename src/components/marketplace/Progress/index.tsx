export default function Progress() {
  return (
    <section className="bg-gray-light py-8 w-full flex flex-col items-center">
      <div className="max-w-default px-default w-full flex items-center justify-between">
        <span className="flex flex-col gap-1">
          <h2>Impacto gerado nos últimos dias</h2>
          <p className="text-5xl font-bold ">R$ 103.234,75</p>
        </span>
        <span className="flex flex-col gap-1">
          <h2>Vendas realizadas até o momento</h2>
          <p className="text-5xl font-bold ">R$ 36.978,98</p>
        </span>
        <span className="flex flex-col gap-1">
          <h2>Valor total de impacto</h2>
          <p className="text-5xl font-bold ">R$ 278.678,57</p>
        </span>
      </div>
    </section>
  );
}
