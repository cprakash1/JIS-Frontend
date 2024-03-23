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

  return registrar.isFetched ? (
    <div>
      <h1>Dashboard</h1>
      <h3>Name: {registrar?.name}</h3>
      <h3>Email: {registrar?.email}</h3>
      <h3>Phone: {registrar?.phone}</h3>
      <h3>Address: {registrar?.address}</h3>
      <h3>Court: {registrar?.court?.name}</h3>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default Dashboard;
