import React from "react";
import { motion } from "framer-motion";
import "./home.css";

const Home = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-white text-center px-6"
      style={{
        background: `linear-gradient(to left, rgba(44, 83, 100, 0.8), rgba(32, 58, 67, 0.8), rgba(15, 32, 39, 0.8)), 
                     url('/img1.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Hero Section */}
      <div className="p-4">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold p-2 text-blue-200 mt-20">
          The Place to Make Your Lifestyle Changes Correctly
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mt-7 text-green-300 mb-4 ">
          Get Your Health on Track
        </h2>
      </div>

      {/* Button */}
      <button
        className="mt-4 px-6 py-3 bg-gradient-to-r from-[#71B280] to-[#134E5E] text-white font-bold rounded-lg shadow-lg hover:opacity-90 transition duration-300 text-2xl"
        onClick={() => (window.location.href = "/health")}
      >
        Visit Health Page
      </button>

      {/* Content Section - 2 Boxes per Row */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {/* What is Healthetics? */}
        <motion.div
          className="p-6 bg-gray-800 rounded-lg shadow-lg w-80 md:w-96"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <h2 className="text-xl font-bold text-green-300 mb-2">What is Healthetics?</h2>
          <p className="text-gray-300">
            Healthetics is an AI-powered platform designed to analyze health data, 
            provide personalized insights, and help users make informed lifestyle choices 
            through machine learning-driven predictions.
          </p>
        </motion.div>

        {/* Our Aim */}
        <motion.div
          className="p-6 bg-gray-800 rounded-lg shadow-lg w-80 md:w-96"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <h2 className="text-xl font-bold text-green-300 mb-2">Our Aim</h2>
          <p className="text-gray-300">
            Our goal is to empower individuals with AI-driven health predictions and 
            personalized lifestyle guidance, helping them take control of their well-being 
            before serious health issues arise.
          </p>
        </motion.div>

        {/* How to Use Healthetics */}
        <motion.div
          className="p-6 bg-gray-800 rounded-lg shadow-lg w-80 md:w-96"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <h2 className="text-xl font-bold text-green-300 mb-2">How to Use?</h2>
          <p className="text-gray-300 text-left">
            1️. Enter your basic health data.<br />
            2️. Get instant AI-powered predictions.<br />
            3️. Receive personalized lifestyle recommendations.<br />
            4️. Improve your health with data-driven insights.
          </p>
        </motion.div>

        {/* Future Aspects */}
        <motion.div
          className="p-6 bg-gray-800 rounded-lg shadow-lg w-80 md:w-96"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <h2 className="text-xl font-bold text-green-300 mb-2">Future Aspects</h2>
          <p className="text-gray-300 text-left">
            1. Integration with wearables for real-time health monitoring.<br />
            2. More AI models for additional health predictions.<br />
            3. Mobile app development for better accessibility.<br />
            4. Community-based health insights and coaching.
          </p>
        </motion.div>

        {/* Tech Stack & Development Team in the same row */}
        <motion.div
          className="p-6 bg-gray-800 rounded-lg shadow-lg w-80 md:w-96"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInLeft}
        >
          <h2 className="text-xl font-bold text-green-300 mb-2">Tech Stack</h2>
          <p className="text-gray-300 text-left">
            Frontend: React, HTML, CSS, TailwindCSS<br />
            Backend: Flask, Python<br />
            Machine Learning Models: TensorFlow, Scikit-Learn<br />
            Deployment: Render, AWS<br />
            Database: MongoDB / Firebase (Future Integration)
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-gray-800 rounded-lg shadow-lg w-80 md:w-96"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInRight}
        >
          <h2 className="text-xl font-bold text-green-300 mb-2">Development Team</h2>
          <p className="text-gray-300 text-center">
            Dev Shubhankar - <span className="text-blue-300">22052811</span> <br />
            Aditi Saurya - <span className="text-blue-300">22052788</span> <br />
            Aryan Raj Singh- <span className="text-blue-300">22051758</span> <br />
            Aryadeep Pradhan- <span className="text-blue-300">22051843</span> <br />
            Arnab Sen- <span className="text-blue-300">22051842</span> <br />
            Sarthak Sharma- <span className="text-blue-300">2205767</span> <br />
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
