"use client";

import SignInButton from "@/components/signin-button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { SignOutButton } from "@/components/signout-button";
import { useSession } from "next-auth/react";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const session = useSession();
  return (
    <div className="p-8">
      <Label className="text-2xl font-bold">Nextjs 15 Boilerplate</Label>
      <Label className="text-lg font-bold">- Authjs 5</Label>

      <Separator className="my-4" />
      {session.data ? (
        <>
          <Label className="text-lg font-bold">
            {session.data?.user?.name}
          </Label>
          <Label className="text-lg font-bold">
            {session.data?.user?.email}
          </Label>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
      <Separator className="my-4" />
      <Label className="text-lg font-bold">- Next Theme</Label>
      <ThemeToggle />
    </div>
  );
}
