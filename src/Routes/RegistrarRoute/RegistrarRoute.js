import React from "react";
import { Route, Routes } from "react-router-dom";
import RegistrarRouteLayout from "./RegistrarRouteLayout";
import Dashboard from "../../Pages/Registrar/Dashboard";
import RegisterJudge from "../../Pages/Registrar/RegisterJudge";
import RegisterLawyer from "../../Pages/Registrar/RegisterLawyer";
import RegisterCourt from "../../Pages/Registrar/RegisterCourt";
import UpdateCourt from "../../Pages/Registrar/UpdateCourt";
import RegisterCase from "../../Pages/Registrar/RegisterCase";
import AssignDate from "../../Pages/Registrar/AssignDate";

const RegistrarRoute = () => {
  return (
    <Routes>
      <Route path="" element={<RegistrarRouteLayout />}>
        <Route path="" element={<Dashboard />} />
        <Route path="/register-judge" element={<RegisterJudge />} />
        <Route path="/register-lawyer" element={<RegisterLawyer />} />
        <Route path="/register-court" element={<RegisterCourt />} />
        <Route path="/update-court" element={<UpdateCourt />} />
        <Route path="/register-case" element={<RegisterCase />} />
        <Route path="/assign-date" element={<AssignDate />} />
      </Route>
    </Routes>
  );
};

export default RegistrarRoute;
