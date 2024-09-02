import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { FloatingButton, GLOBAL_SCROLL_ID } from "@/components/FloatingButton";
import { ScrollArea } from "@/components/ScrollArea";
import { Toaster } from "@/components/Sonner";
import { TooltipProvider } from "@/components/Tooltip";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

import QueryProvider from "./QueryProvider";

const fontFamily = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.savebys.com"),
  category: "technology",
  manifest: "https://savebys.com/manifest.json",
  applicationName: "SAVEBYS",
  keywords: [
    "adote",
    "ajude",
    "ajuda",
    "ajuda solidária",
    "ajudar",
    "apoiadores",
    "Bys",
    "business",
    "contribuir",
    "contribuição",
    "curador",
    "curadoria",
    "campanha",
    "campanha de doação",
    "catástrofe",
    "doações",
    "doar",
    "doação",
    "doação de móveis",
    "doadores",
    "empresa",
    "enchentes",
    "enchentes RS",
    "Fecomercio",
    "impacto",
    "marketplace",
    "Mobília Solidária",
    "negócios afetados",
    "patrocinadores",
    "RS",
    "Rio Grande do Sul",
    "SAVEBYS",
    "Save",
    "social",
    "solidariedade",
    "Vaquinha"
  ],
  openGraph: {
    url: "https://www.savebys.com",
    siteName: "SAVEBYS",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.savebys.com/images/savebys/logo_slogan_gray.webp",
        width: 753,
        height: 543
      }
    ]
  },
  authors: [
    {
      name: "Carlos Silva",
      url: "https://www.linkedin.com/in/silvacarlosoliveira"
    }
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={fontFamily.className}>
        <div itemScope itemType="https://schema.org/WebSite">
          <meta itemProp="url" content="https://savebys.com/" />
          <meta itemProp="name" content="SAVEBYS" />
          <meta itemProp="alternateName" content="SAVE BYS" />
        </div>

        <QueryProvider>
          <TooltipProvider delayDuration={50}>
            <ScrollArea id={GLOBAL_SCROLL_ID} className="h-[100vh]">
              {children}
            </ScrollArea>
            <FloatingButton aria-label="Voltar para o topo da página" />
          </TooltipProvider>
        </QueryProvider>

        <Toaster />

        {/* Vercel */}
        <SpeedInsights />
        <Analytics />

        <GoogleAnalytics gaId="G-WB6FN0R181" />
      </body>
    </html>
  );
}
