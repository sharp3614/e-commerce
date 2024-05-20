import React from "react";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import Search from "../../components/search";

const menu = [
  { title: "Giriş Yap", pathname: "#", icon: CiUser },
  { title: "Favorilerim", pathname: "#", icon: MdFavoriteBorder },
  { title: "Sepetim", pathname: "/cart", icon: CiShoppingCart },
];

const Navbar = () => {
  return (
    <div className="sticky w-full md:h-auto z-50 top-0 px-4 bg-white border-b grid grid-cols-2 md:grid-cols-3 justify-center items-center py-2">
      <div className="md:text-center text-sky-400 text-xl">Shop</div>
      <div className="w-full relative col-span-2 md:col-span-1 order-2 mt-4 md:mt-0 md:order-none">
        <Search />
      </div>
      <nav className="flex justify-end md:justify-center flex-1 gap-4">
        {menu.map((link) => {
          const IconItem = link.icon;
          return (
            <Link
              key={link.title}
              className="flex items-center gap-1"
              to={link.pathname}
            >
              {IconItem && <IconItem />}
              <span className="hidden md:block">{link.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
