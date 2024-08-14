import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import dbConnect from "@/lib/dbConnect";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Shop",
  description: "this app create By Nitish Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  dbConnect: () => Promise<void>;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
