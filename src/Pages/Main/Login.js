import React, { useContext, useState, useEffect } from "react";
import { connect } from "react-redux";
import { login, setUserType } from "../../Redux/auth/authAction";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/ToastProvider";

const Login = (props) => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (props.isLoggedin) navigate(`/${props.userType}`);
  }, [props.isLoggedin]);
  const { toast } = useToast();

  return (
    <>
      <div className="head-title">
        <div className="left">
          <h1>Login</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Main</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Login</h3>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="user-type">User Type</label>
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
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Email</label>
                  <input
                    className="login-input"
                    type="email"
                    value={userLogin.email}
                    onChange={(e) => {
                      setUserLogin((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password</label>
                  <input
                    className="login-input"
                    type="password"
                    value={userLogin.password}
                    onChange={(e) => {
                      setUserLogin((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={async (e) => {
                      e.preventDefault();
                      toast.info("Logging In...");
                      await props.login(userLogin, toast);
                    }}
                  >
                    Login
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
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
    login: (user, toast) => dispatch(login(user, toast)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
