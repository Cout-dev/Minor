import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Thyroid = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict/thyroid", {
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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-semibold mb-4">Predict Your Thyroid</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        
        <label>Gender:
          <select {...register("gender", { required: true })} className="border p-2 w-full">
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </label>
        {errors.gender && <p className="text-red-500">Gender is required</p>}

        <label>Age:
          <input type="number" {...register("age", { required: true })} className="border p-2 w-full"/>
          {errors.age && <p className="text-red-500">Age is required</p>}
        </label>

        <label>TT4:
          <input type="number" step="0.1" {...register("TT4", { required: true })} className="border p-2 w-full"/>
          {errors.TT4 && <p className="text-red-500">TT4 is required</p>}
        </label>

        <label>T3:
          <input type="number" step="0.1" {...register("T3", { required: true })} className="border p-2 w-full"/>
          {errors.T3 && <p className="text-red-500">T3 is required</p>}
        </label>

        <label>T4U:
          <input type="number" step="0.01" {...register("T4U", { required: true })} className="border p-2 w-full"/>
          {errors.T4U && <p className="text-red-500">T4U is required</p>}
        </label>

        <label>FTI:
          <input type="number" step="0.1" {...register("FTI", { required: true })} className="border p-2 w-full"/>
          {errors.FTI && <p className="text-red-500">FTI is required</p>}
        </label>

        <label>TSH:
          <input type="number" step="0.1" {...register("TSH", { required: true })} className="border p-2 w-full"/>
          {errors.TSH && <p className="text-red-500">TSH is required</p>}
        </label>

        <label>Pregnant:
          <select {...register("pregnant", { required: true })} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>
        {errors.pregnant && <p className="text-red-500">Pregnancy status is required</p>}

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>

      {prediction !== null && (
        <p className="mt-4 p-3 bg-green-100 text-green-800 border border-green-400 rounded">
          Thyroid Prediction: <strong>{prediction}</strong>
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

export default Thyroid;
