import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { FloatingButton, GLOBAL_SCROLL_ID } from "@/components/FloatingButton";
import { ScrollArea } from "@/components/ScrollArea";
import { Toaster } from "@/components/Sonner";
import { TooltipProvider } from "@/components/Tooltip";
import { makeServerForSSR } from "@/mock/server";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { IS_MIRAGE_ENABLED } from "@/constants";

import Mirage from "./Mirage";

const fontFamily = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.savebys.com"),
  category: "technology",
  manifest: "https://savebys.com/manifest.json",
  applicationName: "SAVEBYS",
  keywords: [
    "SAVEBYS",
    "Save",
    "Bys",
    "Business",
    "Vaquinha",
    "Adote",
    "Ajude",
    "Empresa",
    "Curador",
    "Campanha",
    "Apoiadores",
    "Patrocinadores"
  ],
  authors: [
    { name: "Diogo Reis" },
    {
      name: "Carlos Silva",
      url: "https://www.linkedin.com/in/silvacarlosoliveira"
    }
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true
    }
  }
};

type Props = {
  children: React.ReactNode;
};

IS_MIRAGE_ENABLED() && makeServerForSSR();

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={fontFamily.className}>
        <div itemScope itemType="https://schema.org/WebSite">
          <meta itemProp="url" content="https://savebys.com/" />
          <meta itemProp="name" content="SAVEBYS" />
          <meta itemProp="alternateName" content="SAVE BYS" />
        </div>

        <TooltipProvider delayDuration={50}>
          <ScrollArea id={GLOBAL_SCROLL_ID} className="h-[100vh]">
            {children}
          </ScrollArea>
          <FloatingButton aria-label="Voltar para o topo da página" />
        </TooltipProvider>

        <Toaster />

        {/* Vercel */}
        <SpeedInsights />
        <Analytics />

        {IS_MIRAGE_ENABLED() && <Mirage />}
      </body>
    </html>
  );
}
