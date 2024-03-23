import React, { useState, useEffect } from "react";
import { logout } from "../../Redux/auth/authAction";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { isLoggedinSelector } from "../../Redux/auth/authSelector";
import { deleteJudge } from "../../Redux/judge/judgeAction";
import { deleteLawyer } from "../../Redux/lawyer/lawyerAction";
import { deleteRegistrar } from "../../Redux/registrar/registrarAction";

const Logout = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function dispatchTogether() {
    dispatch(logout());
    dispatch(deleteJudge());
    dispatch(deleteLawyer());
    dispatch(deleteRegistrar());
  }

  useEffect(() => {
    const logoutLink = document.getElementById("logmeout");
    if (logoutLink && isLoggedin) {
      dispatchTogether();
      setTimeout(() => {
        logoutLink.click();
      }, 5000);
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <h1>Logout</h1>
      <p>You have been successfully logged out. Redirecting to login...</p>
      <Link to="/login" id="logmeout">
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
