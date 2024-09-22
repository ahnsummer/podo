import {
  FaFaceGrinHearts,
  FaHouseChimney,
  FaMagnifyingGlass,
} from "react-icons/fa6";
import { NavigationItemProps } from "./navigation-bar.types";

export const NavigationItems: NavigationItemProps[] = [
  {
    label: "home",
    path: "/",
    Icon: FaHouseChimney,
  },
  {
    label: "search",
    path: "/search",
    Icon: FaMagnifyingGlass,
  },
  {
    label: "mypage",
    path: "/mypage",
    Icon: FaFaceGrinHearts,
  },
];
