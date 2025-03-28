import { signIn } from "@/auth";
import { Button } from "./ui/button";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google", { redirectTo: "/" });
      }}
    >
      <Button type="submit" className="font-black">
        Signin with Google
      </Button>
    </form>
  );
}
