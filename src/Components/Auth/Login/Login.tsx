import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { useLogin } from "../../../hooks/useLogin";
import { useGoogleAuth } from "../../../hooks/useRegister";
import { useAuth } from "../../AuthContext/context";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useLogin();
  const { mutate: googleAuthFn, isPending: googleLoading } = useGoogleAuth();
  const { setUser } = useAuth() || {};
  const [loginError, setLoginError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    e.persist();

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
    try {
      login(
        { email, password },
        {
          onSuccess: (data) => {
            message.success("Login successful!");
            setEmail("");
            setPassword("");

            if (setUser) setUser(data.user);

            localStorage.setItem("token", data.token);
            navigate("/dashboard");
          },
          onError: (error: any) => {
            console.error("Login error:", error);

            const status = error?.status; // ✅ Use the customError's status from loginFn
            let errorMessage = "Login failed. Please try again.";

            if (status === 401) {
              errorMessage = "Invalid email or password.";
            } else if (status === 403) {
              errorMessage = "Your account is locked.";
            }

            message.error(errorMessage);
            setLoginError(errorMessage);
            setPassword("");

            return;
          },
        }
      );
    } catch (error) {
      console.error("Unexpected error:", error);
      message.error("An unexpected error occurred. Please try again.");
    }
  };

  const handleGoogleSuccess = (response: any) => {
    const credential = response.credential;
    if (!credential) {
      message.error("No Google credential received.");
      return;
    }

    googleAuthFn(
      { idToken: credential },
      {
        onSuccess: (data: any) => {
          if (setUser) setUser(data.user);
          message.success("Logged in with Google!");
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
        },
        onError: () => {
          message.error("Google login failed. Please try again.");
        },
      }
    );
  };

  const handleGitHubLogin = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };

  return (
    <div className="login-page">
      {loginError && (
        <p style={{ color: "red", marginTop: "10px" }}>{loginError}</p>
      )}
      <h2>Student Results Management System</h2>
      <div className="login-card">
        <h3>Login to Your Account</h3>
        <form onSubmit={handleLogin}>
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
          <button type="submit" disabled={isPending} className="login-button">
            {isPending ? "Please wait..." : "Login"}
          </button>
        </form>

        <span className="option">OR</span>

        <div className="sign-in">
          <div className="btn-google">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => message.error("Google login failed")}
            />
          </div>
          <div className="btn-git">
            <button
              className="sign-button"
              disabled={googleLoading}
              onClick={handleGitHubLogin}
            >
              <img src="/githubb.png" alt="GitHub Logo" className="logo" />
              <p style={{ marginLeft: "40px", fontSize: "0.9rem" }}>
                {googleLoading ? "Please wait..." : "Sign in with GitHub"}
              </p>
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
      </div>
    </div>
  );
};

export default Login;
