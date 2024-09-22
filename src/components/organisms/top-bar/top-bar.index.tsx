import { Routes } from "@/routes";
import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="py-3 px-8 flex justify-between items-center border-b-[1px]">
      <Link href={Routes.home} className="flex-center">
        <Image
          src="/common/podo-icon-horizontal.png"
          width={80}
          height={34}
          alt="logo"
          priority
        />
      </Link>
      <div>
        <FaHeart className="w-6 h-6 text-primary" />
      </div>
    </div>
  );
};

export default TopBar;
