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
      <Label className="text-4xl font-black">Nextjs 15 Boilerplate</Label>
      <Separator className="my-4" />
      <Label className="text-2xl font-black">- Authjs 5</Label>
      {session.data ? (
        <>
          <Label className="text-sm font-bold">
            {session.data?.user?.name}
          </Label>
          <Label className="text-sm font-bold">
            {session.data?.user?.email}
          </Label>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
      <Separator className="my-4" />
      <Label className="text-2xl font-black">- Next Theme</Label>
      <ThemeToggle />
      <Separator className="my-4" />
      <Label className="text-2xl font-black">- Next Intl</Label>
    </div>
  );
}
