type FluxItem = {
  title: string;
  description: string;
};

type Props = {
  list: FluxItem[];
};

export default function Flux({ list }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg md:mt-14">
      <ol className="flex flex-col gap-10">
        {list.map((item, i) => {
          const index = i + 1;
          const isOdd = index % 2 != 0;

          return (
            <li
              key={item.title}
              className={`flex max-w-[320px] flex-col self-end gap-2 md:-mt-10 ${isOdd ? "text-end" : "text-start md:-mr-[24rem]"}`}
            >
              <div
                className={`justify-end font-semibold text-2xl flex items-center w-full gap-8 ${
                  isOdd ? "" : "flex-row-reverse"
                }`}
              >
                <h3
                  className={`text-title ${isOdd ? "text-end" : "text-start"}`}
                >
                  {item.title}
                </h3>
                <p>{index}</p>
              </div>
              <p className="text-sm w-full">{item.description}</p>
            </li>
          );
        })}
      </ol>
      <hr className="h-full w-[1px] hidden border border-white border-dashed md:block" />
    </div>
  );
}
