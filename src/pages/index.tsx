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
import { NotesCards } from "@/components/notesCards/notesCards";
import { randomColor } from "@/utils/randomColor";

export default function Home() {
  const { push } = useRouter();

  const t = useCurrentLocale();

  const { data: sessionData } = useSession();

  const userId = sessionData?.user.id ?? "";

  const ctx = api.useContext();
  const { mutate: mutateCreateNote } = api.notes.create.useMutation({
    onSuccess: () => ctx.invalidate(),
  });
  const notes = api.notes.read.useQuery({
    userId,
  });

  const { mutate: mutateUpdateNote } = api.notes.update.useMutation({
    onSuccess: () => ctx.invalidate(),
  });

  function handleUpdateNote(description: string, noteId: string) {
    mutateUpdateNote({ description, noteId });
  }

  const { mutate: mutateDeleteNote } = api.notes.delete.useMutation({
    onSuccess: () => ctx.invalidate(),
  });

  function handleDeleteNote(noteId: string) {
    mutateDeleteNote({ noteId });
  }

  return (
    <>
      <Head>
        <title>Notekeeper</title>
        <meta name="description" content="a way to keep your notes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center overflow-hidden bg-white dark:bg-midnight">
        <Navbar
          handleNote={() =>
            mutateCreateNote({ userId, description: "", color: randomColor()! })
          }
          handleExit={() => signOut()}
        />
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
          notes.data && (
            <>
              <h1 className="text-3xl font-bold">
                Hello, {sessionData.user.name} 👋
              </h1>
              <NotesCards
                notes={notes.data}
                handleUpdate={handleUpdateNote}
                handleDelete={handleDeleteNote}
              />
              <PageLoading isLoading={notes.isLoading} />
            </>
          )
        )}
      </main>
    </>
  );
}
