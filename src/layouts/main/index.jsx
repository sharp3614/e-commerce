import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="w-[1450px] mx-auto flex">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
