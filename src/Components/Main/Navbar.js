import React from "react";
import { Link } from "react-router-dom";
import {
  isLoggedinSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { connect } from "react-redux";

const Navbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            Judiciary Information System
          </Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {props.isLoggedin && props.userType && (
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page">
                    {props.userType.toUpperCase()}
                  </Link>
                </li>
              )}
              {/* <li className="nav-item">
                <Link className="nav-link" href="#">
                  Link
                </Link>
              </li> */}

              {/* <li className="nav-item">
                <Link
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </Link>
              </li> */}
            </ul>
            <form className="d-flex">
              {!props.isLoggedin ? (
                <>
                  <button className="btn btn-outline-success" type="submit">
                    <Link to="/login" className="nav-link">
                      Login
                    </Link>
                  </button>
                  <button
                    className="btn btn-outline-warning ms-3"
                    type="submit"
                  >
                    <Link to="/registration" className="nav-link">
                      Registration
                    </Link>
                  </button>
                </>
              ) : (
                <button className="btn btn-outline-danger" type="submit">
                  <Link to="/logout" className="nav-link active">
                    Logout
                  </Link>
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
