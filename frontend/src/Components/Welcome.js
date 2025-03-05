import React from "react"; 
import { useLocation } from "react-router-dom"; 
 
const Welcome = () => { 
  const location = useLocation(); 
  const { username } = location.state; // Extract username and role from state 
 
  return ( 
    <div className="welcome-container"> 
      <h1>Welcome, {username}</h1> 
    </div> 
  ); 
}; 
 
export default Welcome;