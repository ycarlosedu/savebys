import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CaretRight } from "@phosphor-icons/react/dist/ssr";
import Logo from "images/savebys/logo-savebys-slogan-cropped.svg";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Não encontrado",
    description: "O conteúdo desejado não foi encontrado.",
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false
      }
    }
  };
}

export default function NotFound() {
  return (
    <main className="bg-gray-tertiary bg-gray-forms text-white">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto flex-1 flex-row-reverse gap-12 items-center justify-between md:max-w-none md:flex">
          <div className="flex-1 max-w-lg">
            <Image alt="Logo da SaveBys" src={Logo} width={600} height={600} />
          </div>
          <div className="mt-12 flex-1 max-w-lg space-y-3 md:mt-0">
            <h3 className=" font-semibold">Erro 404</h3>
            <p className="text-title text-4xl font-semibold sm:text-5xl">
              Página não encontrada
            </p>
            <p className="text-white">
              Não encontramos o que você procura. Este link pode ter sido movido
              ou estamos com alguma instabilidade no momento.
            </p>
            <Link href="/" className="text-title link font-medium">
              Voltar para a página inicial
              <CaretRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
