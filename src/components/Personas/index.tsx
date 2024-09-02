import { cn } from "@/lib/utils";

import list from "./list";

export default function Personas() {
  return (
    <section
      id="personas"
      className="px-default pt-8 pb-8 w-full flex flex-wrap max-w-default items-center justify-center gap-12"
    >
      <h2 className="title">Personas</h2>
      <div className="flex items-start flex-wrap justify-center py-8 gap-8">
        {list.map((item) => (
          <div
            key={item.title}
            className={cn("flex flex-col gap-3 text-gray-secondary w-[334px]")}
          >
            <div className="flex items-center justify-center w-full gap-3">
              <item.icon size={48} className="text-primary" />
              <h3 className="font-semibold text-gray-tertiary text-2xl">
                {item.title}
              </h3>
            </div>
            <p className="text-xl">{item.description}</p>

            <ul className="list-disc list-inside">
              {item.topics.map((topic) => (
                <li key={topic} className="">
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
