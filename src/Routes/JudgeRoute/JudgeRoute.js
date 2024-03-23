import React from "react";
import { Route, Routes } from "react-router-dom";
import JudgeRouteLayout from "./JudgeRouteLayout";
import JudgeDashboard from "../../Pages/Judge/JudgeDashboard";
import JudgeUpdate from "../../Pages/Judge/JudgeUpdate";
import JudgeSchedule from "../../Pages/Judge/JudgeSchedule";
import JudgeViewCase from "../../Pages/Judge/JudgeViewCase";

const JudgeRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<JudgeRouteLayout />}>
        <Route path="" element={<JudgeDashboard />} />
        <Route path="update" element={<JudgeUpdate />} />
        <Route path="get-schedule" element={<JudgeSchedule />} />
        <Route path="view-case" element={<JudgeViewCase />} />
      </Route>
    </Routes>
  );
};

export default JudgeRoute;
