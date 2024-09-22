import { ReactNode, createContext } from "react";
import { BreadcrumbSeparatorProps } from "@chakra-ui/react";

type TastingNoteContextProps = {
  children: ReactNode;
} & BreadcrumbSeparatorProps;

export const TastingNoteContext = createContext<BreadcrumbSeparatorProps>({});

export const TastingProvider = ({
  children,
  ...props
}: TastingNoteContextProps) => {
  return (
    <TastingNoteContext.Provider value={props}>
      {children}
    </TastingNoteContext.Provider>
  );
};
