import React from "react";
import Sidebar from "../Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-screen flex p-4 overflow-hidden">
      <div className="flex items-center">
        <Sidebar />
      </div>
      <div className="pt-2 px-2">{children}</div>
    </div>
  );
};

export default Layout;
