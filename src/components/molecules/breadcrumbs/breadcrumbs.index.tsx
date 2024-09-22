import { useEffect, useState } from "react";
import { breadcrumbs } from "./breadcrumbs.constants";
import { useRouter } from "next/router";
import classNames from "classnames";
import { Button } from "@chakra-ui/react";

const Breadcrumbs = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<string>("");

  useEffect(() => {
    if (!router.query.step) return;
    setCurrentStep(router.query.step as string);
  }, [currentStep, router.query]);

  return (
    <div className="flex justify-between items-center">
      {breadcrumbs.map(({ step, label }) => (
        <Button
          key={step + label}
          className={classNames(
            currentStep === label ? "!bg-primary !text-white" : "",
            "border px-2"
          )}>
          {label}
        </Button>
      ))}
    </div>
  );
};

export default Breadcrumbs;
