import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="w-full relative overflow-hidden rounded-[32px] py-8 px-8 flex flex-col justify-center gap-8">
      <h2 className="text-2xl lg:text-5xl leading-normal font-bold text-white z-10">
        O seu primeiro <span className="text-primary">Marketplace</span>{" "}
        <br></br> de <span className="text-primary">Impacto Social</span>
      </h2>
      <Link
        href="/marketplace/produtos"
        className="link-btn h-[54px] w-[205px] z-10"
      >
        Acesse o Marketplace
      </Link>
      <Image
        src="/images/marketplace/banner.png"
        className="absolute inset-0 object-cover object-center z-0 min-h-full"
        width={1200}
        height={300}
        alt="Banner do Marketplace da SaveBys"
      />
    </div>
  );
}
