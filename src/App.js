import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/signup/SignUp";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/dashboard" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
