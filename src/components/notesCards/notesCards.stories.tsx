import type { Meta, StoryObj } from "@storybook/react";
import { NotesCards } from "./notesCards";

const meta = {
  title: "Components/NotesCards",
  component: NotesCards,
} satisfies Meta<typeof NotesCards>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    notes: [
      {
        id: "1",
        description: "Lorem ipsum dolor sit amet",
        createdAt: new Date("2022-01-01T12:00:00Z"),
        color: "red",
      },
      {
        id: "2",
        description: "Consectetur adipiscing elit",
        createdAt: new Date("2022-02-15T08:30:00Z"),
        color: "blue",
      },
      {
        id: "3",
        description: "Sed do eiusmod tempor incididunt",
        createdAt: new Date("2022-03-20T18:45:00Z"),
        color: "green",
      },
    ],
    handleUpdate: () => alert("update function"),
    handleDelete: () => alert("delete function"),
  },
};
