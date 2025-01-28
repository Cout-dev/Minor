import React from "react";

const Health = () => {
  const healthTips = [
    {
      img: "https://via.placeholder.com/150",
      title: "Healthy Eating",
      description: "Learn how to eat balanced meals and maintain proper nutrition.",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Exercise Regularly",
      description: "Discover the best exercises to stay fit and active.",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Stay Hydrated",
      description: "Understand the importance of drinking enough water daily.",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Mental Wellness",
      description: "Tips to manage stress and improve mental health.",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Proper Sleep",
      description: "Get advice on improving your sleep quality for better health.",
    },
    {
      img: "https://via.placeholder.com/150",
      title: "Preventive Care",
      description: "Learn about regular check-ups and preventive health measures.",
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-700 dark:text-sky-500 my-8">
        Health Tips
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-20 w-full">
        {healthTips.map((tip, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center text-center"
          >
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
        ))}
      </div>

      {/* Button Section */}
      <button
        className="mt-8 px-6 py-3 bg-blue-700 text-white font-bold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
        onClick={() => alert("Explore more health tips!")}
      >
        Explore More
      </button>
    </div>
  );
};

export default Health;
