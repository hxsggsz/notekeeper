import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    themes: {
      clearable: false,
      list: [
        {
          name: "Light",
          class: [],
          color: "#ffffff",
          default: true,
        },
        {
          name: "Dark",
          // The class dark will be added to the body tag
          class: ["dark"],
          color: "#000000",
        },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
