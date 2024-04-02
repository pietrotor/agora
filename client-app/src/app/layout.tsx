import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "../style/index.css";
import { TanstackProvider } from "@/lib";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agora - Ecosistemas de prosperidad",
  description:
    "Calibramos el ecosistema emprendedor de América Latina para crear prosperidad inclusiva para el individuo, la empresa, la comunidad y el medio ambiente.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={manrope.className}>
        <TanstackProvider>{children}</TanstackProvider>
      </body>
    </html>
  );
}
