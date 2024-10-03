import { createContext, ReactNode } from "react";
import { WineProps } from "./wine-info.types";

export const WineContext = createContext<{ wines: WineProps[] }>({ wines: [] });

export const WineProvider = ({
  wines,
  children,
}: {
  wines: WineProps[];
  children: ReactNode;
}) => {
  return (
    <WineContext.Provider value={{ wines }}>{children}</WineContext.Provider>
  );
};
