import React, { useEffect } from "react";
import { registrarSelector } from "../../Redux/registrar/registrarSelector";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegistrarAsync } from "../../Redux/registrar/registrarAction";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "registrar") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const registrar = useSelector((state) => registrarSelector(state));
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRegistrarAsync({ loginToken }));
  }, []);

  return (
    <>
      <div className="head-title">
        <div className="left">
          <h1>Dashboard</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Registrar</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>INFO:</h3>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <strong>Name:</strong> {registrar?.name}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Email:</strong> {registrar?.email}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Phone:</strong> {registrar?.phone}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Address:</strong> {registrar?.address}
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Court:</strong> {registrar?.court?.name}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
