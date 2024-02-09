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
    <div className="ml-32 flex w-[90%] gap-2 overflow-x-auto pr-8">
      {props.notes.map((note) => (
        <Card
          key={note.id}
          data-color={note.color}
          className="data-[color=redorange]:bg-redorange data-[color=lightyellow]:bg-lightyellow data-[color=greencyan]:bg-greencyan data-[color=cyanlight]:bg-cyanlight data-[color=lilac]:bg-lilac"
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
