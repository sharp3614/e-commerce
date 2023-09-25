import React from "react";
import Logo from "./sidebar/logo";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="w-[1450px] h-screen overflow-hidden mx-auto flex py-4">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
