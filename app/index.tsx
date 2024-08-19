import "../global.css";
import React from "react";
import { GluestackUIProvider } from "../components/ui/gluestack-ui-provider";
import * as Linking from "expo-linking";

let defaultTheme: "dark" | "light" = "light";

Linking.getInitialURL().then((url: any) => {
  let { queryParams } = Linking.parse(url) as any;
  defaultTheme = queryParams?.iframeMode ?? defaultTheme;
});

type ThemeContextType = {
  colorMode?: "dark" | "light";
  toggleColorMode?: () => void;
};
export const ThemeContext = React.createContext<ThemeContextType>({
  colorMode: "light",
  toggleColorMode: () => {},
});

export default function App() {
  const [colorMode, setColorMode] = React.useState<"dark" | "light">(
    defaultTheme
  );

  const toggleColorMode = async () => {
    setColorMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <GluestackUIProvider mode={colorMode}>
        <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
          {/* bottom SafeAreaView */}
        </ThemeContext.Provider>
      </GluestackUIProvider>
    </>
  );
}

// export { default } from "../.ondevice";
