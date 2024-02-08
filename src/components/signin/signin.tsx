import { useCurrentLocale } from "@/hooks/useCurrentLocale";
import { Button } from "../ui/button";

interface ISignIn {
  handleSignIn: () => void;
}

export const SignIn = (props: ISignIn) => {
  const t = useCurrentLocale();

  return (
    <div className="align-center flex justify-center gap-2">
      <h1>{t.signIn}</h1>
      <Button variant="link" size="link" onClick={props.handleSignIn}>
        {t.signInButton}
      </Button>
    </div>
  );
};
