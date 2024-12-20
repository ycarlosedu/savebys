import { Eyes, PiggyBank, Target } from "@phosphor-icons/react/dist/ssr";

import valuesList from "./values";

export default function MissionVisionValues() {
  return (
    <section className="bg-white px-default pt-20 w-full flex flex-col items-center justify-center gap-8">
      <div className="flex gap-8 flex-wrap items-start justify-center w-full max-w-default">
        <div className="flex flex-col gap-8 items-center justify-center flex-1 md:min-w-[320px]">
          <div className="flex gap-3 items-center">
            <Target size={48} className="text-primary" />
            <h3 className="title">Missão</h3>
          </div>
          <p className="text-center max-w-[300px] text-lg text-gray-secondary">
            Ajudar Microempreendedores e pequenas empresas, em situações de
            crise, a reerguerem seus negócios através de apoio financeiro,
            material e de serviços, fortalecendo suas capacidades de recuperação
            e crescimento sustentável.
          </p>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center flex-1 md:min-w-[320px]">
          <div className="flex gap-3 items-center">
            <Eyes size={48} className="text-primary" />
            <h3 className="title">Visão</h3>
          </div>
          <p className="text-center max-w-[300px] text-lg text-gray-secondary">
            Ser a principal plataforma de apoio a microempreendedores e a
            pequenas empresas em situações de crise, promovendo uma rede
            solidária de apoio e reconstrução de negócios.
          </p>
        </div>

        <div className="flex flex-col gap-8 items-center justify-center flex-1 md:min-w-[320px]">
          <div className="flex gap-3 items-center">
            <PiggyBank size={48} className="text-primary" />
            <h3 className="title">Valores</h3>
          </div>

          <ul className="flex flex-col items-center justify-center text-center max-w-[300px] text-lg text-gray-secondary gap-1">
            {valuesList.map(({ title }) => (
              <li key={title} className="flex flex-col gap-4">
                <h4>{title}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
