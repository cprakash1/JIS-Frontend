import React from "react";
import Navbar from "../../Components/Main/Navbar";
import LawyerNavbar from "../../Components/Lawyer/LawyerNavbar";
import { Outlet } from "react-router-dom";

const LawyerRouteLayout = () => {
  return (
    <>
      <Navbar />
      <LawyerNavbar />
      <Outlet />
    </>
  );
};

export default LawyerRouteLayout;
