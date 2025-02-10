import React from "react";
import { Link } from "react-router-dom";
import "./disease/Stress.jsx"

const Health = () => {
  const healthTips = [
    {
      img: "https://via.placeholder.com/150",
      title: "Stress Level Detector",
      description: "Check your stress levels with our AI-powered tool.",
      link: "/Stress",  // Link to stress form
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Diabetes Prediction",
      description: "Analyze your risk of diabetes using machine learning.",
      link: "/Diabetes",  // Link to diabetes form
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Thyroid Check",
      description: "Predict thyroid conditions with our medical tool.",
      link: "/Thyroid",  // Link to thyroid form
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Heart Disease Prediction",
      description: "Assess your heart disease risk based on medical data.",
      link: "/Heart",  // Link to heart form
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Calorie Burnt Estimator",
      description: "Find out how many calories you burn daily.",
      link: "/Calorie",  // Link to calorie form
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-700 dark:text-sky-500 my-8">
        Health Predictions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20 w-full">
        {healthTips.map((tip, index) => (
          <Link to={tip.link} key={index} className="no-underline">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center text-center cursor-pointer transition-transform hover:scale-105">
              <img
                src={tip.img}
                alt={tip.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-2xl font-bold mt-4 text-blue-700 dark:text-sky-500">
                {tip.title}
              </h2>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {tip.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Health;
