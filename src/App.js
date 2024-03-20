import "./App.css";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Logout from "./Pages/Logout";
import Dashboard from "./Pages/Dashboard";
import RegisterJudge from "./Pages/RegisterJudge";
import RegisterLawyer from "./Pages/RegisterLawyer";
import VerticalNavbar from "./Components/VerticalNavbar";
import RegisterCourt from "./Pages/RegisterCourt";
import UpdateCourt from "./Pages/UpdateCourt";
import RegisterCase from "./Pages/RegisterCase";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/registrar/register-judge"
          element={
            <>
              <Navbar />
              <VerticalNavbar />
              <RegisterJudge />
            </>
          }
        />
        <Route
          path="/registrar/register-lawyer"
          element={
            <>
              <Navbar />
              <VerticalNavbar />
              <RegisterLawyer />
            </>
          }
        />
        <Route
          path="/registrar/register-court"
          element={
            <>
              <Navbar />
              <VerticalNavbar />
              <RegisterCourt />
            </>
          }
        />
        <Route
          path="/registrar/update-court"
          element={
            <>
              <Navbar />
              <VerticalNavbar />
              <UpdateCourt />
            </>
          }
        />
        <Route
          path="/registrar/register-case"
          element={
            <>
              <Navbar />
              <VerticalNavbar />
              <RegisterCase />
            </>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/registrar"
          element={
            <>
              <Navbar />
              <VerticalNavbar />
              <Dashboard />
            </>
          }
        />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
