import React from "react";
import NavBar from "../Dashboard/Navbar/Navbar";
import Sidebar from "../Dashboard/Sidebar/Sidebar";
import Subjectscontent from "./Subjectscontent";
import "./subjects.css";
const Subjects = () => {
  return (
    <div className="subjects">
      <NavBar />
       <div className="subs">
        <Sidebar />
        <Subjectscontent />
      </div>
    </div>
  );
};

export default Subjects;
