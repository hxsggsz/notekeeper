import type { Meta, StoryObj } from "@storybook/react";
import { SignIn } from "./signin";

const meta = {
  title: "Components/SignIn",
  component: SignIn,
} satisfies Meta<typeof SignIn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    handleSignIn: () => alert("signin note function"),
  },
};
