import React from "react";
import { Link } from "react-router-dom";
import "./disease/Stress.jsx";
import "./health.css"; // Make sure to include a CSS file for animations

const Health = () => {
  const healthTips = [
    {
      img: "gen.jpg",
      title: "General Health Prediction",
      description: "Predict your general health based on lifestyle choices.",
      link: "/Genhealth",
      diseaseInfo:
        "Maintaining a healthy lifestyle can prevent obesity-related diseases like diabetes and heart issues.",
    },
    {
      img: "stress.jpg",
      title: "Stress Level Detector",
      description: "Check your stress levels with our AI-powered tool.",
      link: "/Stress",
      diseaseInfo:
        "Chronic stress can lead to high blood pressure, anxiety, and sleep disorders.",
    },
    {
      img: "dia.jpg",
      title: "Diabetes Prediction",
      description: "Analyze your risk of diabetes using machine learning.",
      link: "/Diabetes",
      diseaseInfo:
        "Diabetes affects millions globally. Early prediction helps in better management.",
    },
    {
      img: "cov.jpeg",
      title: "COVID-19 Risk Prediction",
      description: "Assess your COVID-19 risk based on symptoms.",
      link: "/Thyroid",
      diseaseInfo:
        "Staying informed about your COVID risk can help in early detection and precautionary measures.",
    },
    {
      img: "lung.jpeg",
      title: "Lung Cancer Prediction",
      description: "Assess your lung cancer risk based on medical data.",
      link: "/Lungs",
      diseaseInfo:
        "Lung cancer risk factors include smoking, pollution, and genetic predisposition.",
    },
    {
      img: "sle.jpeg",
      title: "Sleep Disorder Prediction",
      description: "Check your sleep health with our AI-powered tool.",
      link: "/Sleep",
      diseaseInfo:
        "Sleep disorders can lead to memory issues, fatigue, and weakened immunity.",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)",
      }}
    >
      <h1 className="text-4xl font-bold text-blue-200 my-8 text-center">
        Health Predictions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 lg:px-8 max-w-4xl mx-auto justify-center items-center">
        {healthTips.map((tip, index) => (
          <Link to={tip.link} key={index} className="no-underline">
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front Side */}
                <div className="flip-card-front">
                  <h2 className="text-2xl font-bold mb-8 text-blue-300 text-center">
                    {tip.title}
                  </h2>
                  <img
                    src={tip.img}
                    alt={tip.title}
                    className="w-full h-56 object-cover rounded-md"
                  />
                </div>
                {/* Back Side */}
                <div className="flip-card-back flex flex-col justify-center items-center">
                  <h2 className="text-xl font-bold text-white text-center">
                    {tip.title}
                  </h2>
                  <p className="mt-2 text-gray-300 text-center">
                    {tip.diseaseInfo}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Health;
