import { supabase } from "../../../supabase.config";

export async function getWines() {
  const { data, error } = await supabase.from("wine").select("*");
  if (error) {
    console.error("데이터 패칭 실패", error);
    return [];
  }
  console.log("데이터 패칭 성공", data);

  return data;
}
