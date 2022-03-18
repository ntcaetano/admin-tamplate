import { createContext, ReactNode, useState } from "react";

type Theme = "dark" | "";

type AppContextData = {
  theme: Theme;
  toggleTheme: () => void;
};

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext({} as AppContextData);

export function AppProvider(props: AppContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("");

  function toggleTheme() {
    setTheme(theme === "" ? "dark" : "");
    console.log(theme, "chamou")
  }
  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
