import logo from "../assets/Images/logo.png";
import logo1 from "../assets/Images/logo1.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Headeritem from "./Headeritem";
import { useState } from "react";

function Header() {
  const[toggle,settoggle] = useState(false);
  const menu = [
    { name: "HOME", icon: HiHome },
    { name: "SEARCH", icon: HiMagnifyingGlass },
    { name: "WATCH LIST", icon: HiPlus },
    { name: "ORIGINALS", icon: HiStar },
    { name: "MOVIES", icon: HiPlayCircle },
    { name: "SERIES", icon: HiTv },
  ];
  return (
    <div className="flex justify-between p-5 ">
      <div className="flex   gap-8">
        <img
          src={logo}
          className="w-[80px] md:w-[115px] object-cover"
          alt="logo"
        />
        <div className="hidden  md:flex gap-8">
          {menu.map((item) => (
            <Headeritem  name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && <Headeritem name={""} Icon={item.icon} />,
          )}
        </div>
        <div className="relative md:hidden flex items-center" onClick={()=>{
          console.log(toggle);
          settoggle(!toggle)}}>
          <Headeritem name={""} Icon={HiDotsVertical} />
         {toggle?( <div className="absolute top-full right-0 mt-2 w-48 bg-[#121212] border border-gray-700 rounded-lg shadow-xl z-50 p-2">
            {menu.map(
              (item, index) =>
                index >= 3 && <Headeritem name={item.name} Icon={item.icon} />,
            )}
          </div>):null}
        </div>
      </div>
      <img
        src={logo1}
        className="
       w-[40px] rounded-full
      "
      />
    </div>
  );
}

export default Header;


