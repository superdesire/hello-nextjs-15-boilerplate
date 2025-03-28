import { Button } from "./ui/button";
import { signInWithGoogle } from "@/actions/auth";

export default function SignInButton() {
  return (
    <form action={signInWithGoogle}>
      <Button type="submit" className="font-black">
        Signin with Google
      </Button>
    </form>
  );
}
