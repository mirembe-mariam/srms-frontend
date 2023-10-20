import { useState} from "react";
import "./Login.css";
import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const handleLogin = () => {
    if (username === "mariam" && password === "1234") {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setError("Invalid credentials ! Please try again.");
    }
  };
  return (
    <div className="login-page">
      <h2>Student Results Management System</h2>
      <div className="login-card">
        <h3>Login to access your account </h3>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}
    </div>
  );
};

export default Login;
