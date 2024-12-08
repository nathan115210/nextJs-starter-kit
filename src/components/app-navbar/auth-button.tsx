import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IconBrandGoogle } from "@tabler/icons-react";
import { Loader2 } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";

const AuthButton = ({ className }: { className?: string }) => {
  const { data, status } = useSession();

  const handleSignIn = () =>
    signIn("google", {
      // redirect to profile page after sign in
      callbackUrl: "/profile",
    });
  const handleSignOut = () =>
    signOut({
      // redirect to home page after sign out
      callbackUrl: "/",
    });

  if (status === "loading") {
    return (
      <Button disabled className={className}>
        <Loader2 className="animate-spin" />
        Please wait
      </Button>
    );
  } else if (status === "authenticated") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              src={data?.user?.image || "https://github.com/shadcn.png"}
            />
            <AvatarFallback>{data?.user?.name || "User"}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            {data?.user?.name || "Unknown User"}
          </DropdownMenuLabel>
          <DropdownMenuLabel>
            {data?.user?.email || "Unknown User Email"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button
              className={`w-full ${className}`}
              onClick={handleSignOut}
              aria-label="sign-out-button"
            >
              <IconBrandGoogle />
              Sign Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  } else {
    return (
      <Button
        className={className}
        variant="destructive"
        onClick={handleSignIn}
        aria-label="sign-in-button"
      >
        <IconBrandGoogle />
        Sign In
      </Button>
    );
  }
};

export default AuthButton;
