import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-slate-100 px-4">
      {/* Logo Section */}
      <div className="text-center mb-6">
        <h1 className="text-6xl font-bold text-indigo-800">
          <span className="px-3 py-2 bg-gradient-to-tr from-indigo-800 via-purple-400 to-pink-400 rounded-md text-white">
            TaskMan
          </span>
          <span className="text-gray-600"> App</span>
        </h1>
      </div>

      {/* Description Section */}
      
      <div className="text-center max-w-2xl mb-8 px-4">
        <p className="text-lg text-gray-700 leading-relaxed border border-purple-400 p-6 rounded-md shadow-md">
            Discover TaskMan, your cloud-based solution for project management. Organize, track, and manage tasks 
            efficiently with features like file attachments and real-time comments. Our intuitive platform, accessible 
            anywhere, supports secure Google or Microsoft logins. Start simplifying project management with TaskMan today!
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-6 mt-6">
        <Link to="/login">
          <button className="bg-indigo-600 text-white text-xl font-semibold py-3 px-6 rounded-md hover:bg-indigo-700 shadow-md">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-pink-500 text-white text-xl font-semibold py-3 px-6 rounded-md hover:bg-pink-600 shadow-md">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
