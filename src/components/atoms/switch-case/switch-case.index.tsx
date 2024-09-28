import { SwitchCaseProps } from "./switch-case.types";

const SwitchCase = ({ data, cases }: SwitchCaseProps) => {
  return cases[data] || null;
};

export default SwitchCase;
