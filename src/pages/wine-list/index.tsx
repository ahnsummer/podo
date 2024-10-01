import { getWines } from "@/remotes/api/wine";
import { useQuery } from "@tanstack/react-query";

const WineList = () => {
  const { data } = useQuery({ queryKey: ["wines"], queryFn: getWines });

  if (!data) return <div>데이터가 없습니다.</div>;

  return (
    <div className="h-full overflow-scroll">
      <p className="font-semibold text-lg">WineList</p>
      <div>
        {data.map(({ name }, index) => (
          <div key={index + name}>{name}</div>
        ))}
      </div>
    </div>
  );
};

export default WineList;
