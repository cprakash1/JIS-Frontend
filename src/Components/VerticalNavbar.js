import React from "react";
import { Link } from "react-router-dom";
import {
  isLoggedinSelector,
  userTypeSelector,
} from "../Redux/auth/authSelector";
import { connect } from "react-redux";

const VerticalNavbar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/registrar/register-judge"
                >
                  Register Judge
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/registrar/register-lawyer"
                >
                  Register Lawyer
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/registrar/register-court"
                >
                  Register Court
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/registrar/update-court"
                >
                  Update Court
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/registrar/register-case"
                >
                  Case
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/registrar/assign-date"
                >
                  Assign Date
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Update
                </Link>
              </li>
            </ul>
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

export default connect(mapStateToProps, null)(VerticalNavbar);
