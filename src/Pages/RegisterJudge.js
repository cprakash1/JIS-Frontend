import React, { useEffect, useState } from "react";
import { getAllCourt } from "../Utils/getAllCourt";
import { registrarRegistration } from "../Utils/registrarRegistration";
import "./Registration.css"; // Import CSS file for styling
import { registerJudge } from "../Utils/registerJudge";
import { useSelector } from "react-redux";
import { loginTokenSelector } from "../Redux/auth/authSelector";

const RegisterJudge = () => {
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
      <div className="registration-container">
        <h1>Registration</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          }}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          }}
        />
        <br />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          value={formData.phone}
          id="phone"
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          }}
        />
        <br />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          value={formData.address}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          }}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          }}
        />
        <br />
        <label htmlFor="court">Court</label>
        <select
          className="court-select"
          name="court"
          id="court"
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          }}
        >
          <option value="NO_COURT_ASSIGNED">No Court Assigned</option>
          {court.map((court, index) => (
            <option key={index} value={court.id}>
              {court.name}
            </option>
          ))}
        </select>
        <br />
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
      </div>
    </>
  );
};

export default RegisterJudge;
