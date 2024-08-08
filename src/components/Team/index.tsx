import Image from "next/image";

import teamList from "./teamList";

export default function Team() {
  return (
    <section
      id="time"
      className="bg-white w-full py-20 flex flex-col gap-8 items-center px-default"
    >
      <div className="max-w-default flex flex-col gap-10 items-center">
        <h2 className="title text-primary">Time</h2>

        <div className="flex items-start justify-center gap-8 flex-wrap text-gray-secondary">
          {teamList.map((teammate) => (
            <div
              key={teammate.name}
              className="flex flex-col items-center justify-start text-center gap-4"
            >
              <Image
                src={teammate.image}
                alt={"Imagem do colega " + teammate.name}
                width={150}
                height={150}
                className="rounded-full border-4 border-primary w-[150px] h-[150px]"
              />
              <p className="font-medium">{teammate.name}</p>
              <div>
                {teammate.occupations.map((occupation, index) => {
                  const isFirst = index === 0;

                  return (
                    <span
                      className={`block ${isFirst ? "text-base font-medium" : "text-xs"}`}
                      key={occupation}
                    >
                      {occupation}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
