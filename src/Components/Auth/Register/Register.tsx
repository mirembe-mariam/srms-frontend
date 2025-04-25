import { useState } from "react";
import "./Register.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useRegister } from "../../../hooks/useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Register = () => {
  const navigate = useNavigate();
  const { mutate: register, isError, error, isPending } = useRegister();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegister = () => {
    if (!name || !password || !confirmPassword || !email) {
      message.error("Please fill in all fields");
      return;
    }
   
    if (!/\S+@\S+\.\S+/.test(email)) {
      message.error("Please enter a valid email address");
      return;
    }
    if (!/^[a-zA-Z0-9]+$/.test(name)) {
      message.error("username can only contain letters and numbers");
      return;
    }
    if (name.length < 3) {
      message.error("username must be at least 3 characters long");
      return;
    }
    if (name.length > 20) {
      message.error("username must be at most 20 characters long");
      return;
    }
    register(
      { email, name, password, confirmPassword },
      {
        onSuccess: () => {
          message.success("Please check your email to verify your account");
          setEmail("");
          setName("");
          setPassword("");
          setConfirmPassword("");
        },
        onError: (error: any) => {
          console.error("Registration failed:", error);
          message.error("Registration failed. Please try again.");
        },
      }
    );
  };

  return (
    <div className="register-page">
      <h2>Student Results Management System</h2>
      <div className="register-card">
        <h3>Create Your Account</h3>

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
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
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

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="password-input-wrapper">
            <input
              type={confirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <span
              onClick={toggleConfirmPasswordVisibility}
              className="password-toggle-icon"
            >
              {confirmPasswordVisible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
        </div>

        <button className="register-button button:disabled" disabled={isPending} onClick={handleRegister}>
          {isPending ? "Please wait..." : "Register"}
        </button>

        <p style={{ marginTop: "15px" }}>
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Login
          </span>
        </p>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{isError}</p>}
      </div>
    </div>
  );
};

export default Register;
