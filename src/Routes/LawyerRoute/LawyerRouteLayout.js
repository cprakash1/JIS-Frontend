import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import LawyerNavbarDesigned from "../../Components/Lawyer/LawyerNavbarDesigned";
import NavbarDesigned from "../../Components/Main/NavbarDesigned";

const LawyerRouteLayout = () => {
  useEffect(() => {
    const menuBar = document.querySelector("#content nav .bx.bx-menu");
    const sidebar = document.getElementById("sidebar");

    const handleClick = () => {
      sidebar.classList.toggle("hide");
    };

    if (menuBar && sidebar) {
      menuBar.addEventListener("click", handleClick);

      if (window.innerWidth < 768) {
        sidebar.classList.add("hide");
      }
    }

    // Cleanup function to remove event listener
    return () => {
      if (menuBar && sidebar) {
        menuBar.removeEventListener("click", handleClick);
      }
    };
  }, []);
  return (
    <>
      <LawyerNavbarDesigned />
      <NavbarDesigned children={<Outlet />} />
    </>
  );
};

export default LawyerRouteLayout;
