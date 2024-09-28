import { ReactElement } from "react";

export type SwitchCaseProps = {
  data: string;
  cases: Record<string, ReactElement>;
};
