import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { Stack } from "@chakra-ui/react";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import { getWinesByType } from "@/remotes/api/wine";
import WineInfo from "@/components/molecules/wine-info/wine-info.index";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryClient = new QueryClient();
  const type = context.params!.type as string;

  await queryClient.prefetchQuery({
    queryKey: ["winesByType"],
    queryFn: () => getWinesByType(type),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const SearchWineByType = () => {
  const router = useRouter();
  const type = router.query.type as string;

  const { data: wineListByType } = useQuery({
    queryKey: ["winesByType"],
    queryFn: () => getWinesByType(type),
  });

  if (!wineListByType) return <div>데이터가 없습니다.</div>;

  return (
    <div className="h-screen overflow-scroll pt-16 pb-4 px-4">
      <Stack spacing="16">
        {wineListByType.map(
          ({ area, name, type, grade, image, price, id }, index) => (
            <WineInfo
              key={index + name}
              id={id}
              area={area}
              name={name}
              type={type}
              grade={grade}
              image={image}
              price={price}
            />
          )
        )}
      </Stack>
    </div>
  );
};
export default SearchWineByType;
