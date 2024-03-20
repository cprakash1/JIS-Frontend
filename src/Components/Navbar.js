import React from "react";
import { Link } from "react-router-dom";
import {
  isLoggedinSelector,
  userTypeSelector,
} from "../Redux/auth/authSelector";
import { connect } from "react-redux";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            JIS
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Link
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Action
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Another action
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              {!props.isLoggedin ? (
                <>
                  <button className="btn btn-outline-success" type="submit">
                    <Link to="/login" className="nav-link active">
                      Login
                    </Link>
                  </button>
                  <button
                    className="btn btn-outline-warning ms-3"
                    type="submit"
                  >
                    <Link to="/registration" className="nav-link active">
                      Registration
                    </Link>
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-outline-danger"
                  type="submit"
                  onClick={() => {
                    props.logout();
                  }}
                >
                  {/* <Link to="/logout" className="nav-link active"> */}
                  Logout
                  {/* </Link> */}
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
      ;
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userType: userTypeSelector(state),
    isLoggedin: isLoggedinSelector(state),
  };
};

export default connect(mapStateToProps, null)(Navbar);
