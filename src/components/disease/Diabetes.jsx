import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Diabetes = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [result, setResult] = useState(null);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict/diabetes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      setResult(responseData["Diabetes Prediction"]);
    } catch (error) {
      console.error("Error:", error);
      alert("Error connecting to the backend!");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-semibold mb-4">Diabetes Prediction</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <label>Age:
          <input type="number" {...register("age", { required: true })} className="border p-2 w-full"/>
        </label>
        {errors.age && <p className="text-red-500">Age is required</p>}

        <label>Family Diabetes History:
          <select {...register("familyDiabetes")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>High Blood Pressure:
          <select {...register("highBP")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>BMI (Body Mass Index):
          <input type="number" step="0.1" {...register("bmi", { required: true })} className="border p-2 w-full"/>
        </label>
        {errors.bmi && <p className="text-red-500">BMI is required</p>}

        <label>Alcohol Consumption:
          <select {...register("alcohol")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Sleep per Day (hours):
          <input type="number" {...register("sleep", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Regular Medicine Consumption:
          <select {...register("regularMedicine")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Junk Food Consumption:
          <select {...register("junkFood")} className="border p-2 w-full">
            <option value="1">Often</option>
            <option value="0">Rarely</option>
            <option value="3">Never</option>
          </select>
        </label>

        <label>Stress Level:
          <select {...register("stress")} className="border p-2 w-full">
            <option value="0">Not at all</option>
            <option value="1">Sometimes</option>
            <option value="2">Very often</option>
            <option value="3">Always</option>
          </select>
        </label>

        <label>Blood Pressure:
          <select {...register("bpLevel")} className="border p-2 w-full">
            <option value="0">Low</option>
            <option value="1">Normal</option>
            <option value="2">High</option>
          </select>
        </label>

        <label>Number of Pregnancies:
          <input type="number" {...register("pregnancies")} className="border p-2 w-full"/>
        </label>

        <label>Pre-Diabetes:
          <select {...register("pDiabetes")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Urination Frequency:
          <select {...register("urinationFreq")} className="border p-2 w-full">
            <option value="1">Frequent</option>
            <option value="0">Normal</option>
          </select>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>

      {result !== null && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <h3 className="text-lg font-semibold">Diabetes Prediction: {result === 1 ? "Diabetes Detected" : "No Diabetes"}</h3>

          {result === 1 ? (
            <div className="mt-4">
              <h4 className="font-semibold">Recommendations:</h4>
              <p>🎥 <a href="https://www.youtube.com/watch?v=1NIhv6fCqAU&ab_channel=ThisMorning" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                I Cured My Type 2 Diabetes | This Morning
              </a></p>
              <p>📄 <a href="https://www.niddk.nih.gov/health-information/diabetes/overview/healthy-living-with-diabetes" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                Healthy Living with Diabetes (NIDDK, NIH)
              </a></p>
            </div>
          ) : (
            <div className="mt-4">
              <h4 className="font-semibold">Learn More:</h4>
              <p>📄 <a href="https://www.who.int/news-room/fact-sheets/detail/diabetes" className="text-blue-500" target="_blank" rel="noopener noreferrer">
                Diabetes - WHO Fact Sheet (World Health Organization - WHO)
              </a></p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Diabetes;
