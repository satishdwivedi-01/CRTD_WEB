import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
    const navigate = useNavigate();

  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSignUp = async () => {
    if (!agreeTerms) {
      alert("Please agree to the Terms and Conditions.");
      return;
    }
    console.log(password !== confirmPassword)
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const payload = {
      username,
      email,
      phone,
      password,
    };

    try {
      const res = await fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Account created successfully!");
        navigate("/login"); 
        
        setusername('');
        setEmail('');
        setPhone('');
        setPassword('');
        setConfirmPassword('');
        setAgreeTerms(false);
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src="crtdLogo.png" alt="CRTD Logo" /> CRTD Technologies
        </div>
      </header>
      <div className="signup-wrapper">
        <div className="signup-left">
          <div className="signup-form-card">
            <div className="signup-icon">
              <img src="crtdLogo.png" alt="logo" />
            </div>
            <h2>Create Account</h2>
            <p className="subtext">Join our community of tech professionals</p>

            <div className="input-group pl-3">
              <FaUser className="icon" />
              <input
                type="text"
                placeholder="Enter your full name"
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </div>

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
              <FaPhone className="icon" />
              <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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

            <div className="input-group pl-3">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="checkbox-group pl-3">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <span>
                I agree to the <a href="#">Terms and Conditions</a>
              </span>
            </div>

            <button className="signup-btn" onClick={handleSignUp} type="button">
              Create Account
            </button>

            <p className="switch-login">
              Already have an account? <a href="/login">Sign in instead</a>
            </p>
          </div>
        </div>

        <div className="signup-right">
          <div className="signup-info-box">
            <h2>Join Our Tech Community</h2>
            <div className="info-item">
              <div className="LogoCont">
                <img src="./S1.svg" alt="Illustration 1" className="info-icon" />
              </div>
              <div>
                <strong>Exclusive Job Opportunities</strong>
                <p>Access to premium tech positions from top companies</p>
              </div>
            </div>

            <div className="info-item">
              <div className="LogoCont2">
                <img src="./S2.svg" alt="Illustration 2" className="info-icon" />
              </div>
              <div>
                <strong>Career Growth</strong>
                <p>Professional development and learning resources</p>
              </div>
            </div>

            <div className="info-item">
              <div className="LogoCont">
                <img src="./S1.svg" alt="Illustration 3" className="info-icon" />
              </div>
              <div>
                <strong>Verified Companies</strong>
                <p>All employers are thoroughly vetted for quality</p>
              </div>
            </div>

            <div className="signup-stats">
              <div className="stat-card">
                <h3>5000+</h3>
                <p>Tech Jobs</p>
              </div>
              <div className="stat-card">
                <h3>100+</h3>
                <p>Partner Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
