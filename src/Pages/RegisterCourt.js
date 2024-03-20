import React, { useEffect, useState } from "react";
import "./Registration.css"; // Import CSS file for styling
import { useSelector } from "react-redux";
import { loginTokenSelector } from "../Redux/auth/authSelector";
import { registerCourt } from "../Utils/registerCourt";

const RegisterCourt = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
  });
  const loginToken = useSelector((state) => loginTokenSelector(state));

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
        <label htmlFor="location">Location</label>
        <input
          type="text"
          id="location"
          value={formData.location}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          }}
        />
        <br />
        <button
          className="register-button"
          onClick={async (e) => {
            e.preventDefault();
            async function register() {
              await registerCourt({ ...formData, loginToken });
            }
            register();
          }}
        >
          Register
        </button>
      </div>
    </>
  );
};

export default RegisterCourt;
