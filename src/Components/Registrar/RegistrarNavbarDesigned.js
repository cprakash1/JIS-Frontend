import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarSideMenu from "../Main/NavbarSideMenu";

const RegistrarNavbarDesigned = () => {
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
            <Link to="/registrar">
              <i className="bx bxs-dashboard"></i>
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/register-judge">
              <i className="bx bxs-registered"></i>
              <span className="text">Register Judge</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/register-lawyer">
              <i className="bx bxs-registered"></i>
              <span className="text">Register Lawyer</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/register-court">
              <i className="bx bxs-registered"></i>
              <span className="text">Register Court</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/update-court">
              <i className="bx bxs-upvote"></i>
              <span className="text">Update Court</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/register-case">
              <i className="bx bxs-registered"></i>
              <span className="text">Register Case</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/assign-date">
              <i className="bx bxs-calendar-plus"></i>
              <span className="text">Assign Date</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/add-summery">
              <i className="bx bxs-message-dots"></i>
              <span className="text">Add Summery</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/case-view">
              <i className="bx bx-expand-alt"></i>
              <span className="text">Case View</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/close-case">
              <i className="bx bxs-comment-x"></i>
              <span className="text">Close Case</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/pending-case">
              <i className="bx bx-alarm-exclamation"></i>
              <span className="text">Pending Case</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/today-cases">
              <i className="bx bxs-alarm-exclamation"></i>
              <span className="text">Today Cases</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/resolved-cases">
              <i className="bx bx-comment-check"></i>
              <span className="text">Resolved Cases</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/search">
              <i className="bx bx-search"></i>
              <span className="text">Search</span>
            </Link>
          </li>
          <li>
            <Link to="/registrar/update">
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

export default RegistrarNavbarDesigned;
