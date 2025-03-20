import type { Metadata } from "next";
import "./globals.css";
import Header from "./componentes/header"; 
import Footer from "./componentes/footer";
import BotaoBaixeApp from "./componentes/botaoBaixeApp";
import Script from "next/script";



export const metadata: Metadata = {
  title: "CCR",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>  
      <Script src="https://cdn.userway.org/widget.js" data-account="wWYZXkVTsK"></Script>
        <Header />
        {children}
        <Footer/>
        <BotaoBaixeApp/>
      </body>
    </html>
  );
}
