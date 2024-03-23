import React from "react";
import Navbar from "../../Components/Main/Navbar";
import VerticalNavbar from "../../Components/Registrar/VerticalNavbar";
import { Outlet } from "react-router-dom";

const RegistrarRouteLayout = () => {
  return (
    <div>
      <Navbar />
      <VerticalNavbar />
      <Outlet />
    </div>
  );
};

export default RegistrarRouteLayout;
