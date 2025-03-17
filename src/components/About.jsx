import React from "react";
import { Link } from "react-router-dom";
import './about.css';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden w-full" style={{
      background: "linear-gradient(to right, #2C5364, #203A43, #0F2027)"
    }}>
      {/* About Section */}
      <div className="flex-grow text-center p-10 mt-10">
        <h1 className="font-poppins text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          About Healthetics
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Healthetics is a revolutionary lifestyle improvement platform powered by AI-driven health insights. Our mission is to empower individuals with data-driven, personalized recommendations to optimize their well-being. With six advanced machine learning models, we provide accurate health predictions and customized wellness strategies tailored to individual needs.
        </p>
        <h2 className="text-3xl font-semibold text-white mt-10 underline decoration-blue-400">
          Tech Stack
        </h2>
        <div className="mt-4 text-lg text-gray-300 flex flex-col items-center">
          <p><strong className="text-blue-300">Frontend:</strong> React.js, HTML, CSS, JavaScript</p>
          <p><strong className="text-blue-300">Backend:</strong> Python (Flask)</p>
          <p><strong className="text-blue-300">Machine Learning:</strong> Scikit-Learn, TensorFlow</p>
          <p><strong className="text-blue-300">Database:</strong> PostgreSQL</p>
          <p><strong className="text-blue-300">Deployment:</strong> Render, Heroku (Previously Considered)</p>
          <p><strong className="text-blue-300">Version Control:</strong> Git, GitHub</p>
        </div>
        <h2 className="text-3xl font-semibold text-white mt-10 underline decoration-blue-400">
          Meet Our Team
        </h2>
        <div className="mt-4 text-lg text-gray-300 flex flex-col items-center">
          <p><strong className="text-yellow-300">Dev Shubhankar</strong> - 22052811</p>
          <p><strong className="text-yellow-300">Aditi Saurya</strong> - 22052788</p>
          <p><strong className="text-yellow-300">Aryan Raj Singh</strong> - 22051758</p>
          <p><strong className="text-yellow-300">Arnab Sen</strong> - 22051842</p>
          <p><strong className="text-yellow-300">Sarthak Sharma</strong> - 2205767</p>
          <p><strong className="text-yellow-300">Aryadeep Pradhan</strong> - 22051843</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w-full bg-gradient-to-r from-[#71B280] to-[#134E5E] text-white h-20 pt-4 pb-4 shadow-lg">
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold">📧 Email</span>
            <p className="text-lg">info@healthetics.com</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold">📞 Phone</span>
            <p className="text-lg">+1 (123) 456-7890</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl font-semibold">📍 Location</span>
            <p className="text-lg">123 Wellness Street, Fit City, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
