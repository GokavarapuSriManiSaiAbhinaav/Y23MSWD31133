  
import React, { useState } from "react"; 
import axios from "axios"; 
import { useNavigate } from "react-router-dom"; 
 
const Login = () => { 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState(""); 
  const navigate = useNavigate(); 
 
  const handleLogin = async (e) => { 
    e.preventDefault(); 
 
    try { 
      const response = await axios.get("/User.json"); // Replace with your JSON path 
      const users = response.data; 
 
      const user = users.find( 
        (u) => u.username === username && u.password === password 
      ); 
 
      if (user) { 
        // Navigate to the welcome page and pass the role as state 
        navigate("/welcome", { state: { role: user.role } }); 
      } else { 
        setError("Invalid username or password"); 
      } 
    } catch (err) { 
      console.error("Error fetching data:", err); 
      setError("Failed to fetch data. Please try again later."); 
    } 
  }; 
 
  return ( 
    <div className="login-container"> 
      <h1>Login</h1> 
      <form onSubmit={handleLogin}> 
        <div> 
          <label>Username:</label> 
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          /> 
        </div> 
        <div> 
          <label>Password:</label> 
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          /> 
        </div> 
        {error && <p style={{ color: "red" }}>{error}</p>} 
        <button type="submit">Login</button> 
      </form> 
    </div> 
  ); 
}; 
 
export default Login;