import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardContent, CardFooter, CardHeader } from "./card";

const meta = {
  title: "Components/Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: [
      <>
        <CardHeader>x</CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </>,
    ],
  },
};
