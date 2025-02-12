import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Heart = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict/heart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok) {
        setPrediction(result.prediction);
        setError(null);
      } else {
        setPrediction(null);
        setError(result.error || "Prediction failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Heart Disease Prediction</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        
        <label>Gender:
          <select {...register("sex", { required: true })} className="border p-2 w-full">
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </label>

        <label>Age:
          <input type="number" {...register("age", { required: true })} className="border p-2 w-full"/>
          {errors.age && <p className="text-red-500">Age is required</p>}
        </label>

        <label>Chest Pain Type (CP):
          <input type="number" {...register("cp", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Resting Blood Pressure (trestbps):
          <input type="number" {...register("trestbps", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Cholesterol (chol):
          <input type="number" {...register("chol", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Fasting Blood Sugar (fbs):
          <input type="number" {...register("fbs", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Resting ECG Results (restecg):
          <input type="number" {...register("restecg", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Max Heart Rate (thalach):
          <input type="number" {...register("thalach", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Thalassemia (thal):
          <input type="number" {...register("thal", { required: true })} className="border p-2 w-full"/>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>

      {prediction !== null && (
        <p className="mt-4 p-3 bg-green-100 text-green-800 border border-green-400 rounded">
          Heart Disease Prediction: <strong>{prediction}</strong>
        </p>
      )}

      {error && (
        <p className="mt-4 p-3 bg-red-100 text-red-800 border border-red-400 rounded">
          {error}
        </p>
      )}
    </div>
  );
};

export default Heart;
