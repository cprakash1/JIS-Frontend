import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import { login, setUserType } from "../../Redux/auth/authAction";
import "./Login.css"; // Import CSS file for styling
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (props.isLoggedin) navigate(`/${props.userType}`);
  }, [props.isLoggedin]);
  return (
    <>
      <div className="login-container">
        <h1>Login</h1>
        <select
          className="user-type-select"
          defaultValue={props.userType}
          onChange={(e) => {
            props.setUserType(e.target.value);
          }}
        >
          <option value="registrar">Registrar</option>
          <option value="lawyer">Lawyer</option>
          <option value="judge">Judge</option>
        </select>
        <input
          className="login-input"
          type="email"
          value={userLogin.email}
          onChange={(e) => {
            setUserLogin((prev) => ({ ...prev, email: e.target.value }));
          }}
        />
        <input
          className="login-input"
          type="password"
          value={userLogin.password}
          onChange={(e) => {
            setUserLogin((prev) => ({ ...prev, password: e.target.value }));
          }}
        />
        <button
          className="login-button"
          onClick={async (e) => {
            e.preventDefault();
            await props.login(userLogin);
            console.log("Login Done");
          }}
        >
          Login
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    userType: state.auth.userType,
    isLoggedin: state.auth.isLoggedin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserType: (userType) => dispatch(setUserType(userType)),
    login: (user) => dispatch(login(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
