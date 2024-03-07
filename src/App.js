import "./App.css";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
