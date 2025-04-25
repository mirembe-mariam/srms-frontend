import { useState } from "react";
import "./Login.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useLogin } from "../../../hooks/useLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { mutate: login, isError , isPending} = useLogin();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    if (!email || !password) {
      message.error("Please fill in all fields");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      message.error("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      message.error("Password must be at least 6 characters long");
      return;
    }

    login(
      { email, password },
      {
        onSuccess: () => {
          message.success("Check email for otp");
          setEmail("");
          setPassword("");
        },
        onError: (error: any) => {
          console.error("Login failed:", error);
          message.error("Login failed. Please try again.");
        },
      }
    );
  };

  return (
    <div className="login-page">
      <h2>Student Results Management System</h2>
      <div className="login-card">
        <h3>Login to Your Account</h3>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input-wrapper">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={togglePasswordVisibility}
              className="password-toggle-icon"
            >
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>

        <button disabled={isPending} className="login-button button:disabled" onClick={handleLogin}>{isPending? "Please wait ..." : "Login"}</button>

        <p style={{ marginTop: "20px", fontSize: "0.9rem" }}>
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Register
          </span>
        </p>

        {isError && (
          <p style={{ color: "red", marginTop: "10px" }}>{isError}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
