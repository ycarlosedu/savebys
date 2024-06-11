import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { Toaster } from "@/components/Sonner";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div itemScope itemType="https://schema.org/WebSite">
          <meta itemProp="url" content="https://savebys.com/" />
          <meta itemProp="name" content="SAVEBYS" />
          <meta itemProp="alternateName" content="SAVE BYS" />
        </div>

        {children}

        <Toaster />

        {/* Vercel */}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
