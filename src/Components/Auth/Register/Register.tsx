import { useState } from "react";
import "./Register.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useGoogleAuth, useRegister } from "../../../hooks/useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";

const Register = () => {
  const navigate = useNavigate();
  const { mutate: register, isError, error, isPending } = useRegister();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const {mutate: googleAuthFn, isPending:googleLoading, isError:googleError} = useGoogleAuth();
 

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:5000/auth/github";
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
const handleGoogleSuccess = (response: any) => {
    const { tokenId } = response;
    googleAuthFn({ idToken: tokenId });
  };

  const handleGoogleFailure = () => {
    console.error("Google registration failed");
    message.error("Google registration failed. Please try again.");
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

        <button
          className="register-button button:disabled"
          disabled={isPending}
          onClick={handleRegister}
        >
          {isPending ? "Please wait..." : "Register"}
        </button>

        <span className="option">OR</span>

        <div className="sign-in">
          <div className="btn-google">
          <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
            />
          </div>
          <div className="btn-git">
            <button className="sign-button" disabled={googleLoading}onClick={handleGitHubLogin}>
              <img src="/github.webp" alt="GitHub Logo" className="logo" />
              <p style={{marginLeft: '40px', fontSize: '0.9rem' }}>{googleLoading? "Please wait ..." : "Sign in with github"}</p>

            </button>
          </div>
        </div>

        <p style={{ marginTop: "20px" }}>
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
