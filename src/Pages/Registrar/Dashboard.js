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
import Loader from "../Main/Loader";
import { useToast } from "../../Context/ToastProvider";

const Dashboard = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const isFetched = useSelector((state) => state.registrar.isFetched);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "registrar") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const registrar = useSelector((state) => registrarSelector(state));
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const dispatch = useDispatch();
  const { toast } = useToast();

  useEffect(() => {
    if (isFetched) return;
    toast.info("Fetching Registrar Data..");
    dispatch(fetchRegistrarAsync({ loginToken }, toast));
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

      {isFetched ? (
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
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Dashboard;
