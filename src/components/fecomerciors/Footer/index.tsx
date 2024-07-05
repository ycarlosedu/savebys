import Image from "next/image";
import Link from "next/link";

import socialMedias from "@/components/SocialMedias/socialMedias";

import Logo from "images/savebys/logo-savebys-gray-slogan-cropped.svg";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-secondary flex w-full flex-col items-center justify-center gap-6 px-4 pb-6 md:pb-8">
      <div className="w-full px-default max-w-default flex flex-col items-center justify-center gap-6 px-4 py-6">
        <hr className="h-[2px] w-full bg-gray-secondary" />
        <div className="flex gap-4">
          {socialMedias.map((social) => {
            const Icon = social.logo;
            return (
              <Link
                key={social.url}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-white bg-gray-tertiary shadow-xl p-1 rounded-md hover:bg-white hover:text-gray-secondary transition-all ease-in-out"
              >
                <Icon size={24} />
              </Link>
            );
          })}
        </div>

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
      </div>
    </footer>
  );
}
