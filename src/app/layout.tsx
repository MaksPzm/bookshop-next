import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import {ReactNode} from "react";
import Header from "@/components/header/Header";

const MontserratSans = Montserrat({
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Bookshop",
  description: "Bookshop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
        <html lang="en" className={`${MontserratSans.className}`}>
            <body >
                <Header />
                {children}
            </body>
        </html>
  );
}
