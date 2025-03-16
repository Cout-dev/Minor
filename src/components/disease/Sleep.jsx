import React, { useState } from "react";
import { useForm } from "react-hook-form";

const occupations = [
  "Doctor", "Engineer", "Lawyer", "Manager", "Nurse", 
  "Sales Representative", "Salesperson", "Scientist", 
  "Software Engineer", "Teacher"
];

const Sleep = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [result, setResult] = useState(null);

  const onSubmit = async (data) => {
    try {
      const occupationData = occupations.reduce((acc, occ) => {
        acc[`Occupation_${occ}`] = data.Occupation === occ ? 1 : 0;
        return acc;
      }, {});

      delete data.Occupation;
      const formattedData = { ...data, ...occupationData };

      const response = await fetch("http://127.0.0.1:5000/predict/sleep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      const responseData = await response.json();
      setResult(responseData?.["Sleep Disorder Prediction"] || "No prediction received");
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to the backend!");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-semibold mb-4">Sleep Disorder Prediction</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <label>Gender:
          <select {...register("Gender", { required: true })} className="border p-2 w-full">
            <option value="1">Male</option>
            <option value="0">Female</option>
          </select>
        </label>

        <label>Age:
          <input type="number" {...register("Age", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Sleep Duration (hours):
          <input type="number" step="0.1" {...register("Sleep Duration", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Quality of Sleep (1-10):
          <input type="number" {...register("Quality of Sleep", { required: true, min: 1, max: 10 })} className="border p-2 w-full"/>
        </label>

        <label>Physical Activity Level (10-100):
          <input type="number" {...register("Physical Activity Level", { required: true, min: 1, max: 10 })} className="border p-2 w-full"/>
        </label>

        <label>Stress Level (1-8):
          <input type="number" {...register("Stress Level", { required: true, min: 1, max: 10 })} className="border p-2 w-full"/>
        </label>

        <label>BMI Category:
          <select {...register("BMI Category", { required: true })} className="border p-2 w-full">
            <option value="1">Normal Weight</option>
            <option value="2">Obese</option>
            <option value="3">Overweight</option>
          </select>
        </label>

        <label>Heart Rate:
          <input type="number" {...register("Heart Rate", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Daily Steps:
          <input type="number" {...register("Daily Steps", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Systolic BP (usually 120):
          <input type="number" {...register("Systolic BP", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Diastolic BP (usually 80):
          <input type="number" {...register("Diastolic BP", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Occupation:
          <select {...register("Occupation", { required: true })} className="border p-2 w-full">
            {occupations.map((occ) => (
              <option key={occ} value={occ}>{occ}</option>
            ))}
          </select>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>

      {result && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <h3 className="text-lg font-semibold">Sleep Disorder Prediction: {result}</h3>
        </div>
      )}
    </div>
  );
};

export default Sleep;
