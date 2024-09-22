import Link from "next/link";

import { NavigationItems } from "./navigation-bar.constants";

const NavigationBar = () => {
  return (
    <div className="w-full absolute bottom-0 left-0 py-4 flex justify-evenly items-center bg-white border-t-[1px]">
      {NavigationItems.map(({ label, path, Icon }) => (
        <div key={label}>
          <Link href={path}>
            <Icon className="w-6 h-6 text-primary" />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default NavigationBar;
