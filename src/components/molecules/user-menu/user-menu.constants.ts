import { FaRegStarHalfStroke } from "react-icons/fa6";
import { PiNotePencilBold, PiWineFill } from "react-icons/pi";
import { UserMenuProps } from "./user-menu.types";

export const userMenu: UserMenuProps[] = [
  {
    label: "My Wines",
    path: "/user/my-wines",
    Icon: PiWineFill,
  },
  {
    label: "Tasting Notes",
    path: "/user/tasting-notes",
    Icon: PiNotePencilBold,
  },
  {
    label: "Ratings",
    path: "/user/ratings",
    Icon: FaRegStarHalfStroke,
  },
];
