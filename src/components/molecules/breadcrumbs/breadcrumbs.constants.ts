export type BreadcrumbsProps = {
  step: number;
  label: string;
  title: string;
};

export const breadcrumbs: BreadcrumbsProps[] = [
  {
    step: 1,
    label: "score",
    title: "내 점수",
  },
  {
    step: 2,
    label: "nose",
    title: "향",
  },
  {
    step: 3,
    label: "palate",
    title: "맛"
  },
  {
    step: 4,
    label: "food pairing",
    title: "페어링"
  },
  {
    step: 5,
    label: "vintage",
    title: "빈티지"
  },
  {
    step: 6,
    label: "price",
    title: "가격"
  },
  {
    step: 7,
    label: "info",
    title: "정보"
  },
];
