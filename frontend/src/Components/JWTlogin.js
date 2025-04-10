import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate
import AuthContext from "../context/AuthContext";
import "./JWTlogin.css";

const JWTlogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("/api/auth/jwtlogin", { email, password });
      localStorage.setItem("token", data.token);
      login(data.user);
      alert("Login successful!");
      navigate("/"); // ✅ Redirect to Home page
    } catch (error) {
      alert(error?.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="login-wrapper">
      {!user ? (
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className="login-title">Sign In</h2>
          <input 
            type="email" 
            className="login-input" 
            placeholder="Email" 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
          <input 
            type="password" 
            className="login-input" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
          <button type="submit" className="login-button">Login</button>
        </form>
      ) : (
        <h2 className="welcome-text">Welcome, {user.name} 👋</h2>
      )}
    </div>
  );
};

export default JWTlogin;
