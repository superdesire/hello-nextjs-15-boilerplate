"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";

export function SignOutButton() {
  const handleSignOut = async () => {
    try {
      await signOut({
        callbackUrl: "/",
      });
    } catch (error) {
      console.error("Signout error:", error);
    }
  };

  return (
    <Button onClick={handleSignOut} type="submit" className="font-black">
      Sign out
    </Button>
  );
}
