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
import AddSummery from "../../Pages/Registrar/AddSummery";
import UpdateRegistrar from "../../Pages/Registrar/UpdateRegistrar";
import RegistrarViewCase from "../../Pages/Registrar/RegistrarViewCase";
import CLoseCase from "../../Pages/Registrar/CLoseCase";
import PendingCase from "../../Pages/Registrar/PendingCase";
import TodayCase from "../../Pages/Registrar/TodayCase";
import ResolvedCases from "../../Pages/Registrar/ResolvedCases";
import PageNotFound from "../../Pages/Main/PageNotFound";
import SearchCases from "../../Pages/Main/SearchCases";

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
        <Route path="/add-summery" element={<AddSummery />} />
        <Route path="/update" element={<UpdateRegistrar />} />
        <Route path="/case-view" element={<RegistrarViewCase />} />
        <Route path="/close-case" element={<CLoseCase />} />
        <Route path="/pending-case" element={<PendingCase />} />
        <Route path="/today-cases" element={<TodayCase />} />
        <Route path="/resolved-cases" element={<ResolvedCases />} />
        <Route path="/search" element={<SearchCases />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default RegistrarRoute;
