import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Lungs = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [result, setResult] = useState(null);

  const onSubmit = async (data) => {
    // Define feature order for consistency
    const featureOrder = [
      "AGE", "GENDER", "SMOKING", "FINGER_DISCOLORATION", "MENTAL_STRESS",
      "EXPOSURE_TO_POLLUTION", "LONG_TERM_ILLNESS", "IMMUNE_WEAKNESS",
      "BREATHING_ISSUE", "ALCOHOL_CONSUMPTION", "THROAT_DISCOMFORT",
      "CHEST_TIGHTNESS", "FAMILY_HISTORY", "SMOKING_FAMILY_HISTORY", "STRESS_IMMUNE"
    ];

    // Transform input data
    const transformedData = {};
    featureOrder.forEach(field => {
      transformedData[field] = field === "AGE" ? Number(data[field]) : (data[field] === "Yes" ? 1 : 0);
    });

    console.log("🚀 Sending Data:", JSON.stringify(transformedData, null, 2)); // Debugging: Check sent data

    try {
      const response = await fetch("http://127.0.0.1:5000/predict/lungs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transformedData),
      });

      const responseData = await response.json();
      console.log("📩 Backend Response:", JSON.stringify(responseData, null, 2)); // Debugging: Check response

      setResult(responseData["Lungs Prediction"]);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Error connecting to the backend!");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Lungs Disease Prediction Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <label>Age:
          <input type="number" {...register("AGE", { required: true })} className="border p-2 w-full"/>
        </label>
        {errors.AGE && <p className="text-red-500">Age is required</p>}

        <label>Gender:
          <select {...register("GENDER", { required: true })} className="border p-2 w-full">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        {["SMOKING", "FINGER_DISCOLORATION", "MENTAL_STRESS", "EXPOSURE_TO_POLLUTION", "LONG_TERM_ILLNESS", "IMMUNE_WEAKNESS", "BREATHING_ISSUE", "ALCOHOL_CONSUMPTION", "THROAT_DISCOMFORT", "CHEST_TIGHTNESS", "FAMILY_HISTORY", "SMOKING_FAMILY_HISTORY", "STRESS_IMMUNE"].map((field) => (
          <label key={field}>{field.replace(/_/g, " ")}: 
            <select {...register(field, { required: true })} className="border p-2 w-full">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>
        ))}

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>

      {result !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <h3 className="text-lg font-semibold">Lungs Disease Prediction:</h3>
          <p className="text-xl">{result === 1 ? "Positive" : "Negative"}</p>
        </div>
      )}
    </div>
  );
};

export default Lungs;
