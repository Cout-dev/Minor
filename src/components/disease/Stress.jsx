import React from "react";
import { useForm } from "react-hook-form";

const Stress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Know your Stress level</h2>
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
          <input type="number" {...register("occupation", { required: true })} className="border p-2 w-full"/>
        </label>
        
        <label>Sleep Duration (hours):
          <input type="number" step="0.1" {...register("sleep", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>BMI Category:
          <input type="number" {...register("bmiCategory", { required: true })} className="border p-2 w-full"/>
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
    </div>
  );
};

export default Stress;