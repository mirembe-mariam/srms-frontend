import { useState } from "react";
import "./Login.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { useLogin } from "../../../hooks/useLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {  useGoogleAuth } from "../../../hooks/useRegister";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../../AuthContext/context";

const Login = () => {
  const navigate = useNavigate();
  const { mutate: login, isError, isPending } = useLogin();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { setUser } = useAuth() || {};
  const {mutate: googleAuthFn, isPending:googleLoading, isError:googleError} = useGoogleAuth();

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
        onSuccess: (data) => {
          message.success("Check email for otp");
          setEmail("");
          setPassword("");
          if (setUser) {
            setUser(data.user);
          }
          login(data.token);
        },
        onError: (error: any) => {
          console.error("Login failed:", error);
          message.error("Login failed. Please try again.");
        },
      }
    );
  };

  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };
  
  
 
  const handleGoogleSuccess = (response: any) => {
    const credential = response.credential;
    if (credential) {
      googleAuthFn(
        { idToken: credential },
        {
          onSuccess: (data: any) => {
            if (setUser) {
              setUser(data.user);
            }
            message.success("Logged in with Google!");
            navigate("/dashboard"); 
          },
          onError: (error: any) => {
            console.error("Google login failed:", error);
            message.error("Google login failed. Please try again.");
          },
        }
      );
    } else {
      message.error("No Google credential received.");
    }
  };
  

  const handleGoogleFailure = () => {
    console.error("Google login failed");
    message.error("Google login failed. Please try again.");
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

        <button
          disabled={isPending}
          className="login-button button:disabled"
          onClick={handleLogin}
        >
          {isPending ? "Please wait ..." : "Login"}
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

        <p style={{ marginTop: "30px", fontSize: "0.9rem" }}>
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
