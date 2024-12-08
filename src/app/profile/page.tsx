import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getServerSession } from "next-auth";

export default async function ProfilePage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const session = await getServerSession();
  if (!session?.user) return null;

  const { email, image, name } = session.user;

  return (
    <div className="flex items-center justify-center">
      <Card className="container mx-auto mt-0 flex w-full max-w-5xl items-center justify-between px-4 dark:bg-zinc-500 md:px-6">
        <CardHeader className="flex w-full flex-row items-center justify-center gap-6">
          <Avatar>
            <AvatarImage src={image || "https://github.com/shadcn.png"} />
            <AvatarFallback>{name || "Unknown User Name"}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <CardTitle>
              <p>{name || "Unknown User Name"}</p>
            </CardTitle>
            {email && <CardDescription>{email}</CardDescription>}
          </div>
        </CardHeader>
        {/*<CardFooter>
        <Button className="w-full">
          <Check /> Mark all as read
        </Button>
      </CardFooter>*/}
      </Card>
    </div>
  );
}
