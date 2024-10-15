import Link from "next/link";

import { PAGE } from "@/constants";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";

export default function OpenForm() {
  return (
    <div className="flex flex-col gap-4 pt-8 md:flex-row md:gap-8 items-center justify-center px-default">
      <Link href={PAGE.LACRE.REGISTER_BUYER} className="h-[58px] link-btn">
        CADASTRE-SE AQUI
        <CaretRight size={16} />
      </Link>
    </div>
  );
}
