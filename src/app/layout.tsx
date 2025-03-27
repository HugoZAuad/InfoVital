import type { Metadata } from "next";
import "./globals.css";

import Image from "next/image";

export const metadata: Metadata = {
  title: "InfoVital",
  description:
    "Aplicação inovadora que combina monitoramento de saúde com acesso às principais notícias em saúde em tempo real",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body className={`antialiased`}>

        {children}
      </body>
    </html>
  );
}
