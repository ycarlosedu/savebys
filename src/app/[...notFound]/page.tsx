import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Logo from "/images/logo-savebys.png";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "SAVEBYS - Não encontrado",
    description: "O conteúdo desejado não foi encontrado.",
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false
      }
    }
  };
}

export default function NotFound() {
  return (
    <main className="bg-tertiary bg-gray-forms text-white">
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
            <Link
              href="/"
              className="text-title link duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1"
            >
              Voltar para a página inicial
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
