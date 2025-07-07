import React from "react";
import Header from "./Header";
import bgImg from "../assets/bgImg.jpeg";
import { useState } from "react";
const Login = () => {

    const[isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }


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
        
        <h1 className="text-3xl font-bold self-start mb-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        <div className="flex flex-col gap-5">

          {!isSignInForm && <input
            type="text"
            placeholder="Full Name"
            className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />}

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

        {/* Sign In Button*/}
        <button className="p-3 mt-6 bg-red-600 hover:bg-red-700 rounded font-semibold transition">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4" onClick={toggleSignInForm}>{isSignInForm ? "New to CineGPT? Sign Up Now" : "Already a User? Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;