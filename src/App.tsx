import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Auth/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Classes from "./Components/Lectures/Classes";
import Aiexaminer from "./Components/Aiexaminer/Aiexaminer";
import Results from "./Components/Results/Results";
import Scripts from "./Components/Scripts/Scripts";
import Students from "./Components/Students/Students";
import Subjects from "./Components/Courseunits/Subjects";
import Register from "./Components/Auth/Register/Register";
import EmailVerified from "./Components/Auth/emailVerified";
import VerifyOtpPage from "./Components/Auth/verifyOtp";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/email-verified" element={<EmailVerified />} />
          <Route path="/verify-otp" element={<VerifyOtpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<Navigate to="/login" />} />
          <Route path="/classes" element={<Classes/>} />
          <Route path="/ai-examiner" element={<Aiexaminer/>} />
          <Route path="/subjects" element={<Subjects/>} />
          <Route path="/students" element={<Students/>} />
          <Route path="/scripts" element={<Scripts/>} />
          <Route path="/results" element={<Results/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
