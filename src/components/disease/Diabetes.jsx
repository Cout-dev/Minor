import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Diabetes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict/diabetes", {
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
      <h2 className="text-xl font-semibold mb-4">Diabetes Prediction</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        
        <label>Age:
          <input type="number" {...register("age", { required: true, min: 1 })} className="border p-2 w-full"/>
          {errors.age && <p className="text-red-500">Valid age is required</p>}
        </label>

        <label>Family History of Diabetes:
          <select {...register("familyDiabetes", { required: true })} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>High Blood Pressure:
          <select {...register("highBP", { required: true })} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>BMI:
          <input type="number" step="0.1" {...register("bmi", { required: true, min: 10 })} className="border p-2 w-full"/>
          {errors.bmi && <p className="text-red-500">Valid BMI is required</p>}
        </label>

        <label>Alcohol Consumption:
          <select {...register("alcohol", { required: true })} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Sleep Duration (hours):
          <input type="number" step="0.1" {...register("sleep", { required: true, min: 0 })} className="border p-2 w-full"/>
          {errors.sleep && <p className="text-red-500">Valid sleep duration is required</p>}
        </label>

        <label>Regular Medication:
          <select {...register("regularMedicine", { required: true })} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Junk Food Consumption:
          <select {...register("junkFood", { required: true })} className="border p-2 w-full">
            <option value="1">Frequently</option>
            <option value="0">Rarely</option>
          </select>
        </label>

        <label>Stress Level:
          <input type="number" step="0.1" {...register("stress", { required: true, min: 0, max: 10 })} className="border p-2 w-full"/>
          {errors.stress && <p className="text-red-500">Valid stress level (0-10) is required</p>}
        </label>

        <label>Blood Pressure Level:
          <input type="number" step="0.1" {...register("bpLevel", { required: true })} className="border p-2 w-full"/>
          {errors.bpLevel && <p className="text-red-500">Valid BP level is required</p>}
        </label>

        <label>Number of Pregnancies (if applicable):
          <input type="number" {...register("pregnancies", { required: true, min: 0 })} className="border p-2 w-full"/>
          {errors.pregnancies && <p className="text-red-500">Valid pregnancy count is required</p>}
        </label>

        <label>Previous Diabetes Diagnosis:
          <select {...register("pdiabetes", { required: true })} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Frequent Urination:
          <select {...register("urinationFreq", { required: true })} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>

      {prediction !== null && (
        <p className="mt-4 p-3 bg-green-100 text-green-800 border border-green-400 rounded">
          Diabetes Prediction: <strong>{prediction}</strong>
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

export default Diabetes;
