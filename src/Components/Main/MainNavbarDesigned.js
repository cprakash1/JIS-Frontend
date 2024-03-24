import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarSideMenu from "../Main/NavbarSideMenu";

const MainNavbarDesigned = () => {
  return (
    <>
      <section id="sidebar">
        <Link to="/login" className="brand">
          <span className="text ms-3">JIS</span>
        </Link>
        <NavbarSideMenu />
      </section>
    </>
  );
};

export default MainNavbarDesigned;
