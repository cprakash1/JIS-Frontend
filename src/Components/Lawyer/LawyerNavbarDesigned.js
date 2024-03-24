import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarSideMenu from "../Main/NavbarSideMenu";

const LawyerNavbarDesigned = () => {
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
        <Link to="/login" className="brand">
          <span className="text ms-3">JIS</span>
        </Link>
        <ul className="side-menu top">
          <li className="active">
            <Link to="/lawyer">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/lawyer/view-case">
              <i className="bx bxs-bullseye"></i>
              <span className="text">View - Case</span>
            </Link>
          </li>
          <li>
            <Link to="/lawyer/get-schedule">
              <i className="bx bxs-calendar"></i>
              <span className="text">Get-Schedule</span>
            </Link>
          </li>
          <li>
            <Link to="/lawyer/payment">
              <i className="bx bxl-paypal"></i>
              <span className="text">Payment</span>
            </Link>
          </li>
          <li>
            <Link to="/lawyer/update">
              <i className="bx bxs-upvote"></i>
              <span className="text">Update</span>
            </Link>
          </li>
        </ul>
        <NavbarSideMenu />
      </section>
    </>
  );
};

export default LawyerNavbarDesigned;
