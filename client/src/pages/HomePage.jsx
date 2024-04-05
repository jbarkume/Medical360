import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <div className="text-center mb-4">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">
          Welcome to Stony Brook Medical360
        </h1>
        <p className="text-lg text-blue-700">
          Your one-stop solution for medical management.
        </p>
      </div>
      <div className="flex mt-4">
        <Link
          to="/login"
          className="mx-2 px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700 transition-colors duration-200"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
