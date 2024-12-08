import { ReactNode, Suspense } from "react";

import LoadingPage from "@/app/loading";
import NavBar from "@/components/app-navbar/nav-bar";
import { ThemeProvider } from "@/components/theme-provider";

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
      <body className="flex h-screen w-screen flex-col">
        <ThemeProvider
          enableSystem
          disableTransitionOnChange
          attribute="class"
          defaultTheme="system"
        >
          <NavBar />
          <main className="flex-grow overflow-auto bg-[url(/bg.svg)] bg-cover">
            <Suspense fallback={<LoadingPage />}>{children}</Suspense>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
