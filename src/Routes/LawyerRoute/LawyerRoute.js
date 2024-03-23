import React from "react";
import { Route, Routes } from "react-router-dom";
import LawyerRouteLayout from "./LawyerRouteLayout";
import LawyerDashboard from "../../Pages/Lawyer/LawyerDashboard";
import LawyerViewCase from "../../Pages/Lawyer/LawyerViewCase";
import LawyerSchedule from "../../Pages/Lawyer/LawyerSchedule";
import LawyerPayment from "../../Pages/Lawyer/LawyerPayment";
import LawyerUpdate from "../../Pages/Lawyer/LawyerUpdate";

const LawyerRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<LawyerRouteLayout />}>
        <Route path="" element={<LawyerDashboard />} />
        <Route path="view-case" element={<LawyerViewCase />} />
        <Route path="get-schedule" element={<LawyerSchedule />} />
        <Route path="payment" element={<LawyerPayment />} />
        <Route path="update" element={<LawyerUpdate />} />
      </Route>
    </Routes>
  );
};

export default LawyerRoute;
