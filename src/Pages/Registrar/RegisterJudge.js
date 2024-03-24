import React, { useEffect, useState } from "react";
import { getAllCourt } from "../../Utils/MainUtils/getAllCourt";
import { registrarRegistration } from "../../Utils/MainUtils/registrarRegistration";
import "./Registration.css"; // Import CSS file for styling
import { registerJudge } from "../../Utils/RegistrarUtils/registerJudge";
import { useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { useNavigate } from "react-router-dom";

const RegisterJudge = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "registrar") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    court: "",
  });
  const [court, setCourt] = useState([]);
  const loginToken = useSelector((state) => loginTokenSelector(state));

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
          <h1>Register Judge</h1>
          <ul className="breadcrumb">
            <li>
              <a href="#">Registrar</a>
            </li>
            <li>
              <i className="bx bx-chevron-right"></i>
            </li>
            <li>
              <a className="active" href="#">
                Register Judge
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="table-data">
        <div className="order">
          <div className="head">
            <h3>Register Judge</h3>
          </div>
          <table>
            <tbody>
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
                      async function register() {
                        await registerJudge({ ...formData, loginToken });
                      }
                      register();
                    }}
                  >
                    Register 1
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

export default RegisterJudge;
