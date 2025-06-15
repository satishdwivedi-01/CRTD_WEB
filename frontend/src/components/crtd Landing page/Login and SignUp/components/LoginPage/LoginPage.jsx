import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    const payload = { email, password };

    try {
      const res = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        credentials: "include",  //  This enables sending & receiving cookies
      });

      const data = await res.json();

      if (res.ok) {
        alert("Login successful!");
        // Store token or user data if needed
        navigate("/dashboard");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className="iamLogin">
      <header className="header">
        <div className="logo">
          <img src="crtdLogo.png" alt="CRTD Logo" /> CRTD Technologies
        </div>
      </header>

      <div className="login-wrapper">
        <div className="login-left">
          <div className="login-form-card">
            <div className="login-icon">
              <img src="crtdLogo.png" alt="CRTD Logo" />
            </div>
            <h2 className="text-black font-bold text-2xl my-3">Welcome Back!</h2>
            <p className="subtext">Sign in to access your career opportunities</p>

            <div className="input-group pl-3">
              <FaEnvelope className="icon" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group pl-3">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="checkbox-group1 space-between">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button className="login-btn" onClick={handleLogin}>Sign In</button>

            <p className="switch-login">
              Don’t have an account? <a href="/signUp">Sign up now</a>
            </p>
          </div>
        </div>

        <div className="login-right">
          <div className="login-info-box">
            <h2>Start Your Tech Career Journey</h2>
            <p>
              Connect with top tech companies and find your dream job with CRTD Technologies
            </p>
            <div className="login-stats">
              <div className="stat-card">
                <h3>5000+</h3>
                <p>Placements</p>
              </div>
              <div className="stat-card">
                <h3>100+</h3>
                <p>Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

