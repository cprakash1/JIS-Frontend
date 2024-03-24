import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { isLoggedinSelector } from "../../Redux/auth/authSelector";

const NavbarSideMenu = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));

  return (
    <>
      <ul className="side-menu">
        {isLoggedin ? (
          <li>
            <Link to="/logout" className="logout">
              <i className="bx bxs-log-out-circle"></i>
              <span className="text">Logout</span>
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/logout" className="login">
                <i className="bx bxs-log-in-circle"></i>
                <span className="text">LogIn</span>
              </Link>
            </li>
            <li>
              <Link to="/registration" className="registration">
                <i className="bx bxs-registered"></i>
                <span className="text">Registration</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default NavbarSideMenu;
