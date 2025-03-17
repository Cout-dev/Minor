import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Sleep = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [result, setResult] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict/sleep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      setResult(responseData["Sleep Disorder Prediction"] || "No prediction received");
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to the backend!");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Sleep Disorder Prediction</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <label>Age:
          <input type="number" {...register("Age", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Gender:
          <select {...register("Gender", { required: true })} className="border p-2 w-full">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        <label>Sleep Duration (hours):
          <input type="number" step="0.1" {...register("Sleep Duration", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Stress Level (1-8):
          <input type="number" {...register("Stress Level", { required: true, min: 1, max: 8 })} className="border p-2 w-full"/>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>

      {result !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <h3 className="text-lg font-semibold">Sleep Disorder Prediction:</h3>
          <p className="text-xl">{result}</p>
          {result === "Insomnia" && (
            <p className="text-red-600 font-semibold">🎥 Watch: <a href="https://www.youtube.com/watch?v=WVPtF7gr1jw&ab_channel=TherapyinaNutshell" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">How to Fall Asleep Faster: CBT-Insomnia Treatment</a></p>
          )}
          {result === "Sleep Apnea" && (
            <p className="text-red-600 font-semibold">🚨 Recommendation: Visit a doctor as soon as possible.</p>
          )}
          {result === "No Sleep Disorder" && (
            <p className="text-green-600 font-semibold">✅ Recommendation: <a href="https://www.youtube.com/watch?v=5MuIMqhT8DM&t=882s&ab_channel=TED" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Sleep Is Your Superpower | Matt Walker | TED</a></p>
          )}
        </div>
      )}
    </div>
  );
};

export default Sleep;
