import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillShop } from "react-icons/ai";
import { BiBasket } from "react-icons/bi";
import classNames from "classnames";
const Menu = () => {
  return (
    <nav className="mt-0.5 mb-1 flex flex-col gap-2">
      <NavLink to={"/"} className="block">
        {({ isActive }) => (
          <div
            className={classNames("p-2 border  rounded-lg", {
              "border-green-300 shadow-xl shadow-green-100": isActive,
            })}
          >
            <AiFillShop size={32} />
          </div>
        )}
      </NavLink>
      <NavLink to={"/bag"} className="block">
        {({ isActive }) => (
          <div
            className={classNames("p-2 border rounded-lg", {
              "border-green-300 shadow-xl shadow-green-100": isActive,
            })}
          >
            <BiBasket size={32} />
          </div>
        )}
      </NavLink>
    </nav>
  );
};

export default Menu;
