import { LuMenu } from "react-icons/lu";
import { FaRegBell } from "react-icons/fa";
import SearchBar from "../Searchbar";
import Image from "next/image";
import logo from "../../../../public/images/avatar.png";

export default function NavBar({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <div className="flex flex-row justify-between w-full h-16 bg-[#F9FAF9] items-center text-black px-2">
      <LuMenu className="text-2xl cursor-pointer" onClick={toggleSidebar} />
      <div className="flex flex-row justify-between items-center gap-2.5 px-4">
        <FaRegBell className="text-2xl" />
        <SearchBar />
        <Image
          src={logo}
          alt="Avatar"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </div>
  );
}
