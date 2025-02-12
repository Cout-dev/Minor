import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Calorie = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict/calorie", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        mode: "cors",
      });

      const result = await response.json();

      if (response.ok) {
        setPrediction(result.prediction);
        setError(null);
      } else {
        throw new Error(result.error || "Prediction failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setPrediction(null);
      setError(error.message || "Network error. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-semibold mb-4">Calorie Burn Prediction</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        
        <label>Gender:
          <select {...register("gender", { required: true })} className="border p-2 w-full">
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </label>
        {errors.gender && <p className="text-red-500">Gender is required</p>}

        <label>Age:
          <input type="number" {...register("age", { required: true, min: 1 })} className="border p-2 w-full"/>
          {errors.age && <p className="text-red-500">Valid age is required</p>}
        </label>

        <label>Height (cm):
          <input type="number" step="0.1" {...register("height", { required: true, min: 30 })} className="border p-2 w-full"/>
          {errors.height && <p className="text-red-500">Valid height is required</p>}
        </label>

        <label>Weight (kg):
          <input type="number" step="0.1" {...register("weight", { required: true, min: 1 })} className="border p-2 w-full"/>
          {errors.weight && <p className="text-red-500">Valid weight is required</p>}
        </label>

        <label>Exercise Duration (hours):
          <input type="number" step="0.1" {...register("duration", { required: true, min: 0 })} className="border p-2 w-full"/>
          {errors.duration && <p className="text-red-500">Valid duration is required</p>}
        </label>

        <label>Heart Rate (bpm):
          <input type="number" {...register("heartRate", { required: true, min: 30, max: 220 })} className="border p-2 w-full"/>
          {errors.heartRate && <p className="text-red-500">Valid heart rate is required</p>}
        </label>

        <label>Body Temperature (°C):
          <input type="number" step="0.1" {...register("bodyTemp", { required: true, min: 30, max: 45 })} className="border p-2 w-full"/>
          {errors.bodyTemp && <p className="text-red-500">Valid body temperature is required</p>}
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>

      {prediction !== null && (
        <p className="mt-4 p-3 bg-green-100 text-green-800 border border-green-400 rounded">
          Estimated Calories Burned: <strong>{prediction}</strong>
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

export default Calorie;
