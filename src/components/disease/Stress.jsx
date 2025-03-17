import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Stress = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [result, setResult] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict/stress", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      setResult(responseData["Stress Level"]);
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to the backend!");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
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
        </label>
        {errors.age && <p className="text-red-500">Age is required</p>}

        <label>Occupation:
          <select {...register("occupation", { required: true })} className="border p-2 w-full">
            <option value="1">Doctor</option>
            <option value="2">Engineer</option>
            <option value="3">Lawyer</option>
            <option value="4">Manager</option>
            <option value="5">Nurse</option>
            <option value="6">Sales Representative</option>
            <option value="7">Sales Person</option>
            <option value="8">Scientist</option>
            <option value="9">Software Engineer</option>
            <option value="10">Teacher</option>
          </select>
        </label>

        <label>Sleep Duration (hours):
          <input type="number" step="0.1" {...register("sleep", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>BMI Category:
          <select {...register("bmiCategory", { required: true })} className="border p-2 w-full">
            <option value="0">Normal weight</option>
            <option value="2">Overweight</option>
            <option value="1">Obese</option>
          </select>
        </label>

        <label>Heart Rate (bpm):
          <input type="number" {...register("heartRate", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Daily Steps:
          <input type="number" {...register("dailySteps", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Systolic BP:
          <input type="number" {...register("systolicBP", { required: true })} className="border p-2 w-full"/>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>

      {result !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <h3 className="text-lg font-semibold">Your Stress Level is: {result}</h3>
          {result >= 3 && result <= 6 && (
            <div className="mt-2">
              <p>Here are some recommendations to manage stress:</p>
              <ul className="list-disc pl-5">
                <li>
                  📺 Video: <a href="https://www.youtube.com/watch?v=RKECKQWVlO4&ab_channel=MotivationHub" target="_blank" rel="noopener noreferrer" className="text-blue-600">NEUROSCIENTIST: You Will NEVER Be Stressed Again | Andrew Huberman</a>
                </li>
                <li>
                  📄 Article: <a href="https://www.health.harvard.edu/staying-healthy/top-ways-to-reduce-daily-stress" target="_blank" rel="noopener noreferrer" className="text-blue-600">Top Ways to Reduce Daily Stress (Harvard Health, Heidi Godman)</a>
                </li>
              </ul>
            </div>
          )}
          {result >= 7 && (
            <div className="mt-2 text-red-600">
              <p>⚠️ Your stress level is high. Consider visiting a therapist or doctor as soon as possible.</p>
              <p>You may also benefit from joining a therapy or support group.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Stress;
