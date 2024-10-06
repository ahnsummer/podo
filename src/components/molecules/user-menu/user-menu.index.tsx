import Link from "next/link";
import { userMenu } from "./user-menu.constants";

const UserMenu = () => {
  return (
    <div>
      {userMenu.map(({ label, path, Icon }, index) => (
        <Link
          key={label + index}
          href={path}
          className="flex items-center border p-3">
          <Icon className="mr-2" />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  );
};

export default UserMenu;
