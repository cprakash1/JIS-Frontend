import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarSideMenu from "../Main/NavbarSideMenu";

const JudgeNavbarDesigned = () => {
  useEffect(() => {
    const allSideMenu = document
      .getElementById("sidebar")
      .querySelectorAll(".side-menu.top li a");
    allSideMenu.forEach((item) => {
      const li = item.parentElement;

      item.addEventListener("click", function () {
        allSideMenu.forEach((i) => {
          i.parentElement.classList.remove("active");
        });
        li.classList.add("active");
      });
    });
  }, []);
  return (
    <>
      <section id="sidebar">
        <Link to="/" className="brand">
          <span className="text ms-3">JIS</span>
        </Link>
        <ul className="side-menu top">
          <li className="active">
            <Link to="/judge">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/judge/view-case">
              <i className="bx bx-expand-alt"></i>
              <span className="text">View - Case</span>
            </Link>
          </li>
          <li>
            <Link to="/judge/get-schedule">
              <i className="bx bxs-calendar"></i>
              <span className="text">Get-Schedule</span>
            </Link>
          </li>
          <li>
            <Link to="/judge/search">
              <i className="bx bx-search"></i>
              <span className="text">Search</span>
            </Link>
          </li>
          <li>
            <Link to="/judge/update">
              <i className="bx bxs-cog"></i>
              <span className="text">Update</span>
            </Link>
          </li>
        </ul>
        <NavbarSideMenu />
      </section>
    </>
  );
};

export default JudgeNavbarDesigned;
