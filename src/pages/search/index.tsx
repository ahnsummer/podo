import { GetServerSideProps } from "next";
import { getWines } from "@/remotes/api/wine";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import WineType from "@/components/organisms/wine-type/wine-type.index";
import SearchBar from "@/components/molecules/search-bar/search-bar.index";
import { WineProvider } from "@/components/molecules/wine-info/wine-info.context";

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["wines"],
    queryFn: getWines,
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const SearchWine = () => {
  const { data: wineList } = useQuery({
    queryKey: ["wines"],
    queryFn: getWines,
  });

  if (!wineList) return <div>데이터가 없습니다.</div>;

  return (
    <WineProvider wines={wineList}>
      <div className="h-full overflow-scroll p-4">
        <SearchBar />
        <WineType />
      </div>
    </WineProvider>
  );
};

export default SearchWine;
