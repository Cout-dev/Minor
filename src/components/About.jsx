import React from "react";
import { Link } from "react-router-dom";
import './about.css';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden w-full">
      {/* About Section */}
      <div className="flex-grow text-center p-6 mt-10">
        <h1 className="font-poppins text-4xl md:text-5xl font-bold text-blue-700 dark:text-sky-500">
          About Us
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Welcome to our platform! Our mission is to help you make informed lifestyle changes for a healthier and happier life.
          We provide guidance and resources to keep you on track, ensuring sustainable growth in all aspects of health and wellness.
        </p>
      </div>

      {/* Contact Section */}
      <div className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white pt-10 pb-10 mb-15">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 ">
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">Email</span>
            <p className="text-lg">info@yourwebsite.com</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">Phone</span>
            <p className="text-lg">+1 (123) 456-7890</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-semibold">Location</span>
            <p className="text-lg">123 Wellness Street, Fit City, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
