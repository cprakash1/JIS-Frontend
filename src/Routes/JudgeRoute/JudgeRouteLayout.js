import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../Components/Main/Navbar";
import JudgeNavbar from "../../Components/Judge/JudgeNavbar";

const JudgeRouteLayout = () => {
  return (
    <>
      <Navbar />
      <JudgeNavbar />
      <Outlet />
    </>
  );
};

export default JudgeRouteLayout;
