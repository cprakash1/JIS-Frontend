import "./App.css";
import Login from "./Pages/Main/Login";
import Registration from "./Pages/Main/Registration";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Main/Navbar";
import Logout from "./Pages/Main/Logout";
import Dashboard from "./Pages/Registrar/Dashboard";
import RegisterJudge from "./Pages/Registrar/RegisterJudge";
import RegisterLawyer from "./Pages/Registrar/RegisterLawyer";
import VerticalNavbar from "./Components/Registrar/VerticalNavbar";
import RegisterCourt from "./Pages/Registrar/RegisterCourt";
import UpdateCourt from "./Pages/Registrar/UpdateCourt";
import RegisterCase from "./Pages/Registrar/RegisterCase";
import AssignDate from "./Pages/Registrar/AssignDate";
import MainRoute from "./Routes/MainRoute/MainRoute";
import RegistrarRoute from "./Routes/RegistrarRoute/RegistrarRoute";
import LawyerRoute from "./Routes/LawyerRoute/LawyerRoute";
import JudgeRoute from "./Routes/JudgeRoute/JudgeRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/judge/*" element={<JudgeRoute />} />
        <Route path="/lawyer/*" element={<LawyerRoute />} />
        <Route path="/registrar/*" element={<RegistrarRoute />} />
        <Route path="/*" element={<MainRoute />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
