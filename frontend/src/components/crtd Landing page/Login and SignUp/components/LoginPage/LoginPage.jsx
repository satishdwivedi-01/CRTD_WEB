import React from "react";
import { FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import "./LoginPage.css";

function LoginPage() {
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

            <div className="input-group">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input-group">
              <FaLock className="icon" />
              <input type="password" placeholder="Enter your password" />
            </div>

            <div className="checkbox-group1 space-between">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot Password?</a>
            </div>

            <button className="login-btn">Sign In</button>

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
