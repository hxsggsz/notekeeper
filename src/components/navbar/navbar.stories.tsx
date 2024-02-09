import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./navbar";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    handleExit: () => alert("exit function"),
    handleNote: () => alert("plus note function"),
  },
};
