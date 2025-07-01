import type { Metadata } from "next";
import {Rubik } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import WpSticky from "@/components/FloatingWhatsapp/FloatingWhatsapp";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nova Forma ",
  description: "Rhinoplasty in turkey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.className}>
      <body
        className={`${rubik.variable} antialiased font-rubik bg-[#EAF5FB]`}
        style={{fontFamily: "Rubik"}}
      >
        {children}
        <Footer />
        <WpSticky />
      </body>
    </html>
  );
}
