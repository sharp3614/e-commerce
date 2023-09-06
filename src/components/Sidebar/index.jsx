import React from "react";
import { logo } from "../../assets";
import { GoSignOut } from "react-icons/go";
import { BsShop } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between items-center bg-white h-[98%] p-2 pb-4 w-20 border border-gray-300 rounded-lg shadow-lg">
      <div>
        <div className="shadow-xl p-2 w-14 border border-green-300 rounded-lg">
          <img src={logo} className="w-full h-full" alt="" />
        </div>
        <div className="mt-4">
          <Link to={"/"}>
            <BsShop className="w-full h-full p-2" />
          </Link>
          <Link to={"/bag"}>
            <BiShoppingBag className="w-full h-full p-2" />
          </Link>
        </div>
      </div>
      <div>
        <GoSignOut className="shadow-lg rounded-lg bg-white border border-green-300 p-2 w-12 h-12" />
      </div>
    </div>
  );
};

export default Sidebar;
