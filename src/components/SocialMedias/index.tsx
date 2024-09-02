import Link from "next/link";

import CopyAdress from "../CopyAdress";
import socialMedias from "./socialMedias";

export default function SocialMedias() {
  return (
    <section
      id="redes-sociais"
      className="px-default px-default w-full flex items-center justify-center gap-8"
    >
      <div className="bg-gray-light py-16 px-8 rounded-t-3xl flex flex-col gap-8 w-full items-center justify-center max-w-default">
        <h2 className="title">Ajude a divulgar nas Redes Sociais</h2>
        <div className="flex gap-8 items-center justify-center w-full flex-wrap">
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
