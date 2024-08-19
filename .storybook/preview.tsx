// preview.tsx
// copy the content from .ondevice preview.tsx
import React from "react";
// import type { Preview } from "@storybook/react";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";
import "../global.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <GluestackUIProvider>
          <Story />
        </GluestackUIProvider>
      );
    },
  ],
};

export default preview;
