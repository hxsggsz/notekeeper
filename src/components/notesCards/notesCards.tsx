import { formatDate } from "@/utils/formatDate";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { useRouter } from "next/router";
import { X } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useDebouncedCallback } from "@/hooks/useDebounce";

type TLocale = "en-US" | "pt-BR";

interface INotesCards {
  notes: INotes[];
  handleUpdate: (description: string, noteId: string) => void;
  handleDelete: (noteId: string) => void;
}

export interface INotes {
  id: string;
  description: string;
  createdAt: Date;
  color: string;
}

export const NotesCards = (props: INotesCards) => {
  const { locale } = useRouter();

  const debouncedUpdateNote = useDebouncedCallback(
    (description: string, noteId: string) =>
      props.handleUpdate(description, noteId),
    500,
  );

  return (
    <div className="flex w-screen gap-2 overflow-x-auto pl-16 pr-2  max-md:flex-col max-md:items-center">
      {props.notes.map((note, index) => (
        <Card
          key={note.id}
          data-color={note.color}
          className="data-[color=cyanlight]:bg-cyanlight data-[color=greencyan]:bg-greencyan data-[color=lightyellow]:bg-lightyellow data-[color=lilac]:bg-lilac data-[color=redorange]:bg-redorange"
        >
          <CardHeader>
            <Button
              variant="none"
              size="icon"
              onClick={() => props.handleDelete(note.id)}
            >
              <X />
            </Button>
          </CardHeader>
          <CardContent>
            <Textarea
              autoFocus={index === 0}
              onChange={(ev) =>
                debouncedUpdateNote(ev.currentTarget.value, note.id)
              }
              className="min-h-52 resize-none border-none bg-transparent outline-none"
              defaultValue={note.description}
            />
          </CardContent>
          <CardFooter>
            <span>{formatDate(note.createdAt, locale as TLocale)}</span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
