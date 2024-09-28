import { useRouter } from "next/router";

import SwitchCase from "@/components/atoms/switch-case/switch-case.index";
import Score from "@/components/molecules/score/score.index";

const TastingNoteBridge = () => {
  const router = useRouter();

  return (
    <SwitchCase
      data={router.query.step as string}
      cases={{
        score: <Score />,
        nose: <>향 내용</>,
        palate: <>맛</>,
      }}
    />
  );
};

export default TastingNoteBridge;
