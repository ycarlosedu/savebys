import Link from "next/link";

import CopyAdress from "../CopyAdress";
import socialMedias from "./socialMedias";

export default function SocialMedias() {
  return (
    <section
      id="redes-sociais"
      className="bg-gray-primary px-default pt-8 pb-16 w-full flex items-center justify-center gap-8"
    >
      <div className="flex flex-col gap-4 w-full items-start justify-center max-w-[800px]">
        <label htmlFor="project-url" className="text-lg ml-4">
          AJUDE A DIVULGAR NAS REDES SOCIAIS
        </label>
        <div className="flex gap-8 items-center justify-start w-full flex-wrap">
          <CopyAdress />
          <div className="flex gap-4">
            {socialMedias.map((social) => {
              const Icon = social.logo;
              return (
                <Link
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Acessar o perfil da SAVEBYS no ${social.name}`}
                  className="text-white bg-gray-tertiary shadow-xl p-1 rounded-md hover:bg-white hover:text-gray-secondary transition-all ease-in-out"
                >
                  <Icon size={24} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
