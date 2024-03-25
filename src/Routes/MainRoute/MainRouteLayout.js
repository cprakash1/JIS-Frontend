import React from "react";
import { Outlet } from "react-router-dom";
import MainNavbarDesigned from "../../Components/Main/MainNavbarDesigned";
import NavbarDesigned from "../../Components/Main/NavbarDesigned";
import { ToastContainer } from "react-toastify";

const MainRouteLayout = () => {
  return (
    <>
      <MainNavbarDesigned />
      <NavbarDesigned children={<Outlet />} />
    </>
  );
};

export default MainRouteLayout;
