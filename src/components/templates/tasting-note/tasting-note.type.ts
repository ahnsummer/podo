export type TastingNote = {
  // 점수
  score: string;
  // 향
  nose: string;
  // 맛
  palate:
    | "sweetness"
    | "acidity"
    | "body"
    | "tannin"
    | "alcohol"
    | "fruit"
    | "balance"
    | "finish";
  // 빈티지
  vintage: string;
};
