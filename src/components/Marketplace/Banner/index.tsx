"use client";
import Link from "next/link";

export default function Banner() {
    function onClickLink(event: MouseEvent<HTMLAnchorElement, MouseEvent>): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div className=" max-w-default  w-full py-8 px-8 flex flex-col justify-center gap-8"
      style={{
        backgroundImage: 'url("/images/marketplace/banner.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '35vh',
        margin: '2rem',
    }}
    >
      {<><h2 className="text-5xl leading-normal font-bold text-white ">
              O seu primeiro <span className="text-primary">Marketplace</span> <br></br> de <span className="text-primary">Impacto Social</span>
        </h2>
          <Link
              onClick={onClickLink}
              href="#"
              className="link-btn h-[54px] w-[205px]"
          > Acesse o Marketplace
          </Link></>
     }
    </div>

  );
}
