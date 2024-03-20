import React, { useState } from "react";
import "./Registration.css"; // Import CSS file for styling
import { useSelector } from "react-redux";
import { loginTokenSelector } from "../Redux/auth/authSelector";
import { updateCourt } from "../Utils/updateCourt";

const UpdateCourt = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    location: "",
  });
  const loginToken = useSelector((state) => loginTokenSelector(state));

  return (
    <>
      <div className="registration-container">
        <h1>Registration</h1>
        <label htmlFor="id">Id</label>
        <input
          type="text"
          id="id"
          value={formData.id}
          onChange={(e) => {
            setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
          }}
        />
        <br />
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
              await updateCourt({ ...formData, loginToken });
            }
            register();
          }}
        >
          Update
        </button>
      </div>
    </>
  );
};

export default UpdateCourt;
