import React, { useEffect, useState } from "react";
import { getAllCourt } from "../../Utils/MainUtils/getAllCourt";
import "./Registration.css"; // Import CSS file for styling
import { useDispatch, useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { judgeSelector } from "../../Redux/judge/judgeSelector";
import { updateJudgeAsync } from "../../Redux/judge/judgeAction";
import { useNavigate } from "react-router-dom";

const JudgeUpdate = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "judge") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const judge = useSelector((state) => judgeSelector(state));
  const [formData, setFormData] = useState({
    name: judge.name,
    email: judge.email,
    phone: judge.phone,
    address: judge.address,
    password: "",
    court: judge.court?.id,
  });

  const [court, setCourt] = useState([]);
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const courtData = await getAllCourt();
      setCourt(courtData);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="head-title">
        <div className="left">
          <h1>Update</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Judge</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Update
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Update:</h3>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="id">Id :</label>
                  <button disabled={true}>{judge.id}</button>
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    value={formData.phone}
                    id="phone"
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={formData.address}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="court">Court</label>
                  <select
                    className="court-select"
                    name="court"
                    id="court"
                    value={formData.court}
                    onChange={(e) => {
                      setFormData((prev) => ({
                        ...prev,
                        [e.target.id]: e.target.value,
                      }));
                    }}
                  >
                    <option value="NO_COURT_ASSIGNED">No Court Assigned</option>
                    {court.map((court, index) => (
                      <option key={index} value={court.id}>
                        {court.name}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <button
                    className="register-button"
                    onClick={async (e) => {
                      e.preventDefault();
                      dispatch(updateJudgeAsync({ ...formData, loginToken }));
                    }}
                  >
                    Update
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

export default JudgeUpdate;
