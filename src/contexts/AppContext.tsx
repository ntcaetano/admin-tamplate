import { createContext, ReactNode, useState } from "react";

type Tema = "dark" | "";

type AppContextData = {
  tema: Tema;
  AlternarTema: () => void;
};

type AppContextProviderProps = {
  children: ReactNode;
};

export const AppContext = createContext({} as AppContextData);

export function AppProvider(props: AppContextProviderProps) {
  const [tema, setTema] = useState<Tema>("");

  function AlternarTema() {
    setTema(tema === "" ? "dark" : "");
  }
  return (
    <AppContext.Provider
      value={{
        tema,
        AlternarTema,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}
