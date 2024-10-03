/**
 * wine 정보
 * 이미지 (image)
 * 와인이름_KR (name_kr)
 * 와인이름_EN (name_en)
 * 생산지(area)
 * 종류(type) (레드, 화이트, 샴페인, 포트, 스파클링, 디저트 등)
 * 가격(price)
 * 평점(grade)
 *
 * @returns
 */

import { Card, Stack } from "@chakra-ui/react";
import { WineProps } from "./wine-info.types";
import Image from "next/image";

const WineInfo = ({ area, name, type, grade, image, price }: WineProps) => {
  return (
    <Card className="p-4">
      <Stack spacing="2">
        <Image
          src={"/wine/image.png"}
          width={80}
          height={80}
          alt="empty_wine"
          className="absolute top-[-3rem]"
        />
        <Stack spacing="2" className="mt-[14rem]">
          <div className="font-semibold text-lg leading-4">{name}</div>
          <div className="leading-4">{area}</div>
          <div>{type}</div>
          <div>{grade}</div>
          <div>{price}</div>
        </Stack>
        {/* <div>{image}</div> */}
      </Stack>
    </Card>
  );
};

export default WineInfo;
