import React, { useEffect, useState } from "react";
import { getAllCourt } from "../../Utils/MainUtils/getAllCourt";
import { useDispatch, useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { lawyerSelector } from "../../Redux/lawyer/lawyerSelector";
import { updateLawyerAsync } from "../../Redux/lawyer/lawyerAction";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/ToastProvider";

const LawyerUpdate = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "lawyer") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const lawyer = useSelector((state) => lawyerSelector(state));
  const [formData, setFormData] = useState({
    name: lawyer.name,
    email: lawyer.email,
    phone: lawyer.phone,
    address: lawyer.address,
    password: "",
    court: lawyer.court?.id,
  });
  const { toast } = useToast();
  const [court, setCourt] = useState([]);
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const courtData = await getAllCourt(toast);
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
              <a href="#">Lawyer</a>
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
            <h3>Update</h3>
          </div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="id">Id :</label>
                  <div>{lawyer.id}</div>
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
                    <option value="">No Court Assigned</option>
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
                    className="btn btn-primary"
                    onClick={async (e) => {
                      e.preventDefault();

                      dispatch(
                        updateLawyerAsync({ ...formData, loginToken }, toast)
                      );
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

export default LawyerUpdate;
