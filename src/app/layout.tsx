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
      <body className="bg-blue-400 flex flex-col justify-center items-center min-h-screen">

      <Image
              className="m-2  rounded-full  opca"
              src="/InfoVital.png"
              alt="InfoVitalLogo"
              width={150}
              height={150}
            />
            <h1 className="font-extrabold text-2xl text-blue-100">A REDE DE NOTICIAS PARA A SUA SAÚDE!</h1>

        {children}
      </body>
    </html>
  );
}
