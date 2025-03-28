import SignInButton from "@/components/signin-button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { auth } from "@/auth";
import { SignOutButton } from "@/components/signout-button";

export default async function Home() {
  const session = await auth();
  return (
    <div className="p-8">
      <Label className="text-2xl font-bold">Nextjs 15 Boilerplate</Label>
      <Label className="text-lg font-bold">- Authjs 5</Label>

      <Separator className="my-4" />
      {session ? (
        <>
          <Label className="text-lg font-bold">{session.user?.name}</Label>
          <Label className="text-lg font-bold">{session.user?.email}</Label>
          <SignOutButton />
        </>
      ) : (
        <SignInButton />
      )}
    </div>
  );
}
