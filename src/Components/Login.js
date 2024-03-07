import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Login = () => {
  const { login, setUserType } = useContext(GlobalContext);
  const [userTyp, setUserTyp] = useState("registrar");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <select
        defaultValue={userTyp}
        onChange={(e) => {
          setUserTyp(e.target.value);
        }}
      >
        <option value="registrar">Registrar</option>
        <option value="lawyer">Lawyer</option>
        <option value="judge">Judge</option>
      </select>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={async (e) => {
          e.preventDefault();
          await login(email, password);
          console.log("Login Done");
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
