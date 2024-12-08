"use client";

import * as React from "react";

import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <SessionProvider>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </SessionProvider>
  );
}
