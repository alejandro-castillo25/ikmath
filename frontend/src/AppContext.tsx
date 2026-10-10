import { createContext, useContext } from "react";

export type AppContextStateProp<T> = [
  T,
  React.Dispatch<React.SetStateAction<T>>,
];

export type Lang = "en" | "es";
export type Theme = "dark" | "light";

export interface AppContextProps {
  theme: AppContextStateProp<Theme>;
  lang: AppContextStateProp<Lang>;
}

export const AppContext = createContext<null | AppContextProps>(null);

export const useAppContext = () => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used inside AppContextProvider");
  }
  return ctx;
};