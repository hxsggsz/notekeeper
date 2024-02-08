import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { api } from "@/utils/api";
import { PageLoading } from "@/components/pageLoading/pageLoading";
import { useCurrentLocale } from "@/hooks/useCurrentLocale";
import { SignIn } from "@/components/signin/signin";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/router";
import { Navbar } from "@/components/navbar/navbar";

export default function Home() {
  const { push } = useRouter();

  const t = useCurrentLocale();

  const { data: sessionData } = useSession();

  return (
    <>
      <Head>
        <title>Notekeeper</title>
        <meta name="description" content="a way to keep your notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center bg-white dark:bg-midnight">
        <Navbar handleNote={() => {}} handleExit={() => signOut()} />
        <div className="fixed right-4 top-4">
          <Select onValueChange={(value) => push("/", "/", { locale: value })}>
            <SelectTrigger>
              <SelectValue placeholder={t.languageSelect} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en-US">{t.eng}</SelectItem>
              <SelectItem value="pt-BR">{t.portuguese}</SelectItem>
            </SelectContent>
          </Select>
        </div>
        {!sessionData ? (
          <SignIn handleSignIn={() => signIn("github")} />
        ) : (
          <PageLoading isLoading={!sessionData} />
        )}
      </main>
    </>
  );
}
