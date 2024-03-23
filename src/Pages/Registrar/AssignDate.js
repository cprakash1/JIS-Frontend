import React, { useContext, useState, useEffect } from "react";
import "./Login.css"; // Import CSS file for styling
import { useSelector } from "react-redux";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { assignDate, getDates } from "../../Utils/RegistrarUtils/assignDate";
import DateLiberary from "../../Helper/DateLiberary";
import { useNavigate } from "react-router-dom";

const AssignDate = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoggedin || userType !== "registrar") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const [formData, setFormData] = useState({
    CIN: "",
    dateSelected: "",
  });
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const [dateArray, setDateArray] = useState([]);

  async function register() {
    const data = await getDates({ ...formData, loginToken });
    console.log(data);
    setDateArray(data);
  }

  async function assignDateToCIN() {
    const data = await assignDate({ ...formData, loginToken });
    console.log(data);
  }

  return (
    <>
      <div className="login-container">
        <h1>Assign-Date To Case</h1>
        <label htmlFor="CIN">CIN</label>
        <input
          className="login-input"
          type="text"
          id="CIN"
          value={formData.CIN}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          }}
        />
        <br />
        <button
          className="login-button"
          onClick={async (e) => {
            e.preventDefault();
            register();
          }}
        >
          Get Case
        </button>
        <br />
        <label htmlFor="date">Date</label>
        <select
          className="login-input"
          id="dateSelected"
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          }}
        >
          <option value="">Select Date</option>
          {dateArray.map((date) => (
            <option value={date} key={date}>
              {DateLiberary.displayDateTime(date)}
            </option>
          ))}
        </select>
        <br />
        <button
          className="login-button"
          onClick={async (e) => {
            e.preventDefault();
            assignDateToCIN();
          }}
        >
          Assign Date
        </button>
      </div>
    </>
  );
};

export default AssignDate;
