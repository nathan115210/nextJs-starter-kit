"use client";

import React from "react";

import { Button } from "@/components/ui/button";

import { Loader2 } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const SignInButton = () => {
  const { status } = useSession();

  const handleSignIn = () => signIn("google");
  const handleSignOut = () => signOut();

  if (status === "loading") {
    return (
      <Button disabled>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
    );
  } else if (status === "authenticated") {
    return (
      <Button
        variant="secondary"
        onClick={handleSignOut}
        aria-label="sign-out-button"
      >
        Sign Out
      </Button>
    );
  } else {
    return (
      <Button
        variant="destructive"
        onClick={handleSignIn}
        aria-label="sign-in-button"
      >
        Sign In
      </Button>
    );
  }
};

export default SignInButton;
