import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";
import Classes from "./Components/Classes/Classes";
import Aiexaminer from "./Components/Aiexaminer/Aiexaminer";
import Results from "./Components/Results/Results";
import Scripts from "./Components/Scripts/Scripts";
import Students from "./Components/Students/Students";
import Subjects from "./Components/Subjects/Subjects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
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
