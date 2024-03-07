import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();
  const { registrarRegistration, userType } = useContext(GlobalContext);
  useEffect(() => {
    if (userType !== "registrar") {
      navigate("/login");
    }
  }, [userType]);
  const [name, setName] = useState("Registar Name");
  const [email, setEmail] = useState("res@gmail.com");
  const [phone, setPhone] = useState("2131654165");
  const [address, setAddress] = useState("gvdsgsvdhsg");
  const [password, setPassword] = useState("test");
  const [court, setCourt] = useState("C3");

  return (
    <div>
      <h1>Registration</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <label htmlFor="phone">Phone</label>
      <input
        type="text"
        value={phone}
        id="phone"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br />
      <label htmlFor="address">Address</label>
      <input
        type="text"
        id="address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <label htmlFor="court">Court</label>
      <input
        id="court"
        type="text"
        value={court}
        onChange={(e) => {
          setCourt(e.target.value);
        }}
      />
      <br />
      <button
        onClick={async (e) => {
          e.preventDefault();
          await registrarRegistration({
            name,
            email,
            phone,
            address,
            password,
          });
        }}
      >
        Register
      </button>
    </div>
  );
};

export default Registration;
