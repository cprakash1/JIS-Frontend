import React, { useState, useEffect } from "react";
import { logout } from "../Redux/auth/authAction";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Logout = ({ logout }) => {
  useEffect(() => {
    logout();
    const logoutLink = document.getElementById("logmeout");
    if (logoutLink) {
      logoutLink.click();
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
