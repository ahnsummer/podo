import { supabase } from "../../../supabase.config";

const paramsMap: Record<string, string> = {
  red: "Red",
  rose: "Rose",
  white: "White",
  deserrt: "Deserrt",
  sparkling: "Sparkling",
};

export async function getWines() {
  const { data, error } = await supabase.from("wine").select("*");
  if (error) {
    console.error("데이터 패칭 실패", error);
    return [];
  }
  console.log("데이터 패칭 성공", data);

  return data;
}

export async function getWinesByType(type: string) {
  console.log(type);
  const { data, error } = await supabase
    .from("wine")
    .select("*")
    .like("type", `%${paramsMap[type]}%`);
  if (error) {
    console.error("데이터 패칭 실패", error);
    return [];
  }
  console.log("데이터 패칭 성공", data);

  return data;
}
