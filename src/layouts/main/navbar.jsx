import React from "react";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import Search from "../../components/search";

const menu = [
  { title: "Giriş Yap", pathname: "/", icon: CiUser },
  { title: "Favorilerim", pathname: "/", icon: MdFavoriteBorder },
  { title: "Sepetim", pathname: "/", icon: CiShoppingCart },
];

const Navbar = () => {
  return (
    <div className="sticky top-0 bg-white border-b grid grid-cols-3 justify-around items-center py-2">
      <div className="text-center">E commerce</div>
      <div className="flex-1">
        <Search />
      </div>
      <nav className="flex justify-center gap-4">
        {menu.map((link) => {
          const IconItem = link.icon;
          return (
            <Link
              key={link.pathname}
              className="flex items-center gap-1"
              to={link.pathname}
            >
              {IconItem && <IconItem />}
              {link.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
