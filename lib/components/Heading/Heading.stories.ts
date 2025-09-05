import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
  title: "Components/Heading",
  component: Heading,
  args: {
    children: "Text example",
    className: "text-blue-500",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {};
