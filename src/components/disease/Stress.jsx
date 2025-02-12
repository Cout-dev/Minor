import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Stress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict/stress", {
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
        setPrediction(null);
        setError(result.error || "Prediction failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Network error. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-semibold mb-4">Know Your Stress Level</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        
        <label>Gender:
          <select {...register("gender", { required: true })} className="border p-2 w-full">
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </label>

        <label>Age:
          <input type="number" {...register("age", { required: true })} className="border p-2 w-full"/>
          {errors.age && <p className="text-red-500">Age is required</p>}
        </label>

        <label>Occupation:
          <input type="number" {...register("occupation", { required: true })} className="border p-2 w-full"/>
          {errors.occupation && <p className="text-red-500">Occupation is required</p>}
        </label>
        
        <label>Sleep Duration (hours):
          <input type="number" step="0.1" {...register("sleep", { required: true })} className="border p-2 w-full"/>
          {errors.sleep && <p className="text-red-500">Sleep duration is required</p>}
        </label>

        <label>BMI Category:
          <input type="number" {...register("bmiCategory", { required: true })} className="border p-2 w-full"/>
          {errors.bmiCategory && <p className="text-red-500">BMI Category is required</p>}
        </label>

        <label>Heart Rate (bpm):
          <input type="number" {...register("heartRate", { required: true })} className="border p-2 w-full"/>
          {errors.heartRate && <p className="text-red-500">Heart rate is required</p>}
        </label>

        <label>Daily Steps:
          <input type="number" {...register("dailySteps", { required: true })} className="border p-2 w-full"/>
          {errors.dailySteps && <p className="text-red-500">Daily steps count is required</p>}
        </label>

        <label>Systolic BP:
          <input type="number" {...register("systolicBP", { required: true })} className="border p-2 w-full"/>
          {errors.systolicBP && <p className="text-red-500">Systolic BP is required</p>}
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>

      {prediction !== null && (
        <p className="mt-4 p-3 bg-green-100 text-green-800 border border-green-400 rounded">
          Stress Level Prediction: <strong>{prediction}</strong>
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

export default Stress;
