// preview.tsx
// copy the content from .ondevice preview.tsx

import type { Preview } from "@storybook/react";
import "../global.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
