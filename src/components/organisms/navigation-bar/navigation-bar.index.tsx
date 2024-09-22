import Link from "next/link";

import { NavigationItems } from "./navigation-bar.constants";

const NavigationBar = () => {
  return (
    <div className="w-full absolute bottom-0 left-0 bg-violet-700 flex justify-evenly items-center py-4">
      {NavigationItems.map(({ label, path, Icon }) => (
        <div key={label}>
          <Link href={path}>
            <Icon className=" text-white w-6 h-6" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
