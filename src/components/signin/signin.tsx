import { useCurrentLocale } from "@/hooks/useCurrentLocale";
import { Button } from "../ui/button";

interface ISignIn {
  handleSignIn: () => void;
}

export const SignIn = (props: ISignIn) => {
  const t = useCurrentLocale();

  return (
    <div className="flex w-full justify-center gap-2 max-md:flex-col max-md:items-center">
      <h1>{t.signIn}</h1>
      <Button variant="link" size="link" onClick={props.handleSignIn}>
        {t.signInButton}
      </Button>
    </div>
  );
};
