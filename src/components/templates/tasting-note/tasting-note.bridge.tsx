import SwitchCase from "@/components/atoms/switch-case/switch-case.index";
import { useRouter } from "next/router";

const TastingNoteBridge = () => {
  const router = useRouter();

  // if (router.query.step === "score") {
  //   return <>스코어 내용</>;
  // }

  // if (router.query.step === "nose") {
  //   return <>향 내용</>;
  // }

  return (
    <SwitchCase
      data={router.query.step as string}
      cases={{
        score: <>스코어내용</>,
        nose: <>향 내용</>,
      }}
    />
  );
};

export default TastingNoteBridge;
