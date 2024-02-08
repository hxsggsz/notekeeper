import type { Meta, StoryObj } from "@storybook/react";
import { PageLoading } from "./pageLoading";

const meta = {
  title: "Components/PageLoading",
  component: PageLoading,
} satisfies Meta<typeof PageLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isLoading: true,
  },
};
