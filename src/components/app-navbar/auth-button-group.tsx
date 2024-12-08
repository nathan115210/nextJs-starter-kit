import React from "react";

import SignInButton from "@/components/app-navbar/sign-in-button";
import SignUpButton from "@/components/app-navbar/sign-up-button";

export default function AuthButtonGroup({
  onDesktopNavBar = false,
}: {
  onDesktopNavBar?: boolean;
}) {
  const classes = onDesktopNavBar
    ? "hidden gap-4 md:flex"
    : "md:hidden flex gap-3.5 border-t-4 border-dashed mt-3 pt-3 flex-1 place-items-end mb-16";
  return (
    <div className={classes}>
      <SignInButton />
      <SignUpButton />
    </div>
  );
}
