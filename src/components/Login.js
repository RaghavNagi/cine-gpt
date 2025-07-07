import React from "react";
import Header from "./Header";
import bgImg from "../assets/bgImg.jpeg";

const Login = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Header />

      {/* Background Image */}
      <div>
        <img
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src={bgImg}
          alt="Background_Image"
        />
      </div>

      {/* Login Form */}
      <form className="absolute top-1/2 left-1/2 w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 max-w-md h-[500px] flex flex-col justify-between p-8 bg-black bg-opacity-80 text-white rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2">
        
        {/* Title */}
        <p className="text-3xl font-bold self-start mb-4">Sign In</p>

        {/* Inputs */}
        <div className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Email Address"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        {/* Button at bottom */}
        <button className="p-3 mt-6 bg-red-600 hover:bg-red-700 rounded font-semibold transition">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;