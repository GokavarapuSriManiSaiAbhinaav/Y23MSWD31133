import React from "react";
import { useLocation } from "react-router-dom";

const Welcome = () => {
  const location = useLocation();
  const { username } = location.state; // Extract username from state

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Welcome, <span className="text-gray-800">{username}</span>
        </h1>
        <p className="text-gray-600 text-center">
          Thank you for joining Doorstep. We're excited to have you here!
        </p>
        <div className="mt-6 flex justify-center">
          <button className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;