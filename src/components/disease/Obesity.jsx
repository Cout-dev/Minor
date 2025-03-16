import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Obesity = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [result, setResult] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict/genhealth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      setResult(responseData["General Health Prediction"]);
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to the backend!");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-semibold mb-4">General Health Prediction</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <label>Checkup:
          <input type="number" {...register("Checkup", { required: true })} className="border p-2 w-full"/>
        </label>
        {errors.Checkup && <p className="text-red-500">Checkup is required</p>}

        <label>Exercise:
          <select {...register("Exercise")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Heart Disease:
          <select {...register("Heart_Disease")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>
        
        <label>Skin Cancer:
          <select {...register("Skin_Cancer")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Other Cancer:
          <select {...register("Other_Cancer")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Depression:
          <select {...register("Depression")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Diabetes:
          <input type="number" {...register("Diabetes", { required: true })} className="border p-2 w-full"/>
        </label>
        
        <label>Arthritis:
          <select {...register("Arthritis")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Sex:
          <select {...register("Sex")} className="border p-2 w-full">
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </label>

        <label>Age Category:
          <input type="number" {...register("Age_Category", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Height (cm):
          <input type="number" step="0.1" {...register("Height_(cm)", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Weight (kg):
          <input type="number" step="0.1" {...register("Weight_(kg)", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>BMI:
          <input type="number" step="0.1" {...register("BMI", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Smoking History:
          <select {...register("Smoking_History")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Alcohol Consumption:
          <input type="number" step="0.1" {...register("Alcohol_Consumption")} className="border p-2 w-full"/>
        </label>

        <label>Fruit Consumption:
          <input type="number" step="0.1" {...register("Fruit_Consumption")} className="border p-2 w-full"/>
        </label>

        <label>Green Vegetables Consumption:
          <input type="number" step="0.1" {...register("Green_Vegetables_Consumption")} className="border p-2 w-full"/>
        </label>

        <label>Fried Potato Consumption:
          <input type="number" step="0.1" {...register("FriedPotato_Consumption")} className="border p-2 w-full"/>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>

      {result !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <h3 className="text-lg font-semibold">General Health Prediction:</h3>
          <p className="text-xl">{result}</p>
        </div>
      )}
    </div>
  );
};

export default Obesity;