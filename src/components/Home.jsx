import React from "react";
import "./home.css";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <div className="text-center p-4">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold rounded-lg p-2 text-blue-700 dark:text-sky-500">
          The Place to Make Your Lifestyle Changes Correctly
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mt-2 dark:text-green-500">
          Get Your Health on Track
        </h2>
      </div>

      <button
        className="mt-4 px-4 py-2 bg-white text-blue-600 font-bold rounded-lg shadow-lg ring shadow-indigo-500/50 hover:bg-blue-100 transition duration-300 mb-3"
        onClick={() => (window.location.href = "/health")}
      >
        Visit Health Page
      </button>

      {/* Gradient Section */}
      <div className="relative w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white  ">
        <svg
          className="absolute top-0 left-0 w-full -translate-y-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#FFFFFF"
            fillOpacity="1"
            d="M0,192L48,192C96,192,192,192,288,202.7C384,213,480,235,576,213.3C672,192,768,128,864,112C960,96,1056,128,1152,138.7C1248,149,1344,139,1392,133.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>

        <div className="flex flex-col md:flex-row items-center justify-between mt-20 px-6 md:px-16 py-10 md:py-12">
          {/* Text Section */}
          <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 pt-10">
              Shape Your Lifestyle
            </h2>
            <p className="text-base md:text-lg">
              Discover the best practices to maintain a healthy lifestyle. Make
              small, sustainable changes to live a balanced and fulfilling life.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex justify-center md:justify-end pt-10">
            <img
              src="public/Freshman_15-removebg-preview.png"
              alt="Healthy Lifestyle"
              className="rounded-2xl max-w-full h-auto"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
