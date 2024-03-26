import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  isLoggedinSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";

const NavbarDesigned = ({ children }) => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userTypes = useSelector((state) => userTypeSelector(state));
  const name = useSelector((state) => state[userTypes]?.name);
  useEffect(() => {
    const switchMode = document.getElementById("switch-mode");

    if (switchMode) {
      switchMode.addEventListener("change", function () {
        if (this.checked) {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }
      });
    }
  }, []);
  return (
    <>
      <section id="content">
        {isLoggedin && (
          <nav>
            <i className="bx bx-menu"></i>
            <Link to={`/${userTypes}`} className="nav-link">
              {userTypes.toUpperCase()}
            </Link>
            <form action="#">
              <div className="form-input">
                {/* <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx bx-search"></i>
              </button> */}
              </div>
            </form>
            <input type="checkbox" id="switch-mode" hidden />
            <label htmlFor="switch-mode" className="switch-mode"></label>
            <Link to={`/${userTypes}`} className="notification">
              <i className="bx bx-user"></i>
            </Link>
            <Link to={`/${userTypes}`} className="profile">
              {name}
              {/* <img src="img/people.png" /> */}
            </Link>
          </nav>
        )}
        <main>{children}</main>
      </section>
    </>
  );
};

export default NavbarDesigned;
