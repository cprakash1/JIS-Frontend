import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavbarDesigned from "../../Components/Main/NavbarDesigned";
import JudgeNavbarDesigned from "../../Components/Judge/JudgeNavbarDesigned";
import { ToastContainer } from "react-toastify";

const JudgeRouteLayout = () => {
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
  }, []); // empty dependency array means this effect runs only once after the initial render
  return (
    <>
      <>
        <JudgeNavbarDesigned />
        <NavbarDesigned children={<Outlet />} />
      </>
    </>
  );
};

export default JudgeRouteLayout;
