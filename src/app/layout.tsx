import type { Metadata } from "next";
import "./globals.css";

import Image from "next/image";

export const metadata: Metadata = {
  title: "CineMusic",
  description: "Aqui você encontra os melhores filmes e musicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
