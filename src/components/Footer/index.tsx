import Image from "next/image";

import Logo from "images/savebys/logo_slogan_gray_cropped.svg";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-secondary flex w-full flex-col items-center justify-center gap-6 px-4 py-6 md:py-8">
      <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
        <Image
          src={Logo}
          width={200}
          height={200}
          alt="Logo da marca SaveBys"
          className="w-200 h-auto"
        />
        <hr className="h-[24px] w-[1px] bg-gray-secondary hidden md:block" />
        <p className="w-fit break-normal">
          Copyright ©{new Date().getFullYear()} savebys.com
        </p>
      </div>
    </footer>
  );
}
