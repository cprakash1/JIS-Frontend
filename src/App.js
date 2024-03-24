import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainRoute from "./Routes/MainRoute/MainRoute";
import RegistrarRoute from "./Routes/RegistrarRoute/RegistrarRoute";
import LawyerRoute from "./Routes/LawyerRoute/LawyerRoute";
import JudgeRoute from "./Routes/JudgeRoute/JudgeRoute";
import "./NavbarDesigned.css";
import "./NavbarDesigned";

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
