import { ReactElement } from "react";

type SwitchCaseProps = {
  data: string;
  cases: Record<string, ReactElement>;
};

const SwitchCase = ({ data, cases }: SwitchCaseProps) => {
  return <div></div>;
};

export default SwitchCase;
