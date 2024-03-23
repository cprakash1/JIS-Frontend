import React from "react";
import Navbar from "../../Components/Main/Navbar";
import { Outlet } from "react-router-dom";

const MainRouteLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainRouteLayout;
