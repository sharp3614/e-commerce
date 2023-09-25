import React from "react";
import Logo from "./logo";
import Menu from "./menu";

const Sidebar = () => {
  return (
    <aside className="h-[95dvh] shadow-lg px-4 border rounded-lg overflow-auto">
      <Logo />
      <Menu />
    </aside>
  );
};

export default Sidebar;
