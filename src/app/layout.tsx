import { ReactNode } from "react";

import AppNavbar from "@/components/app-navbar";
import Providers from "@/components/providers";

import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Next Js App Starter",
  description: "A starter template for Next.js applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
      />
      <body className="h-screen w-screen">
        <Providers>
          <AppNavbar />
          <main className="flex-grow overflow-auto bg-[url(/bg.svg)] bg-cover">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
