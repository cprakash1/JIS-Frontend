import React from "react";
import { Route, Routes } from "react-router-dom";
import Logout from "../../Pages/Main/Logout";
import Login from "../../Pages/Main/Login";
import Registration from "../../Pages/Main/Registration";
import MainRouteLayout from "./MainRouteLayout";
import MainPage from "../../Pages/Main/MainPage";
import AboutPage from "../../Pages/Main/AboutPage";
import PageNotFound from "../../Pages/Main/PageNotFound";
import SearchCases from "../../Pages/Main/SearchCases";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<MainRouteLayout />}>
        <Route path="" element={<MainPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" index element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route path="logout" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
