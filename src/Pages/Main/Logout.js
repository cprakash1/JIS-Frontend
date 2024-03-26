import React, { useState, useEffect } from "react";
import { logout } from "../../Redux/auth/authAction";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedinSelector } from "../../Redux/auth/authSelector";
import { deleteJudge } from "../../Redux/judge/judgeAction";
import { deleteLawyer } from "../../Redux/lawyer/lawyerAction";
import { deleteRegistrar } from "../../Redux/registrar/registrarAction";
import { useToast } from "../../Context/ToastProvider";

const Logout = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function dispatchTogether() {
    dispatch(logout());
    dispatch(deleteJudge());
    dispatch(deleteLawyer());
    dispatch(deleteRegistrar());
  }

  useEffect(() => {
    const logoutLink = document.getElementById("logmeout");
    if (logoutLink && isLoggedin) {
      toast.info("Logging Out...");
      dispatchTogether();
      setTimeout(() => {
        logoutLink.click();
      }, 2000);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div className="head-title">
        <div className="left">
          <h1>LogOut</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Main</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                LogOut
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>You have been successfully logged out. Redirecting to login...</p>
      <Link to="/login" id="logmeout" className="btn btn-secondary">
        Go to Login
      </Link>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
