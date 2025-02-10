import React from "react";
import { useForm } from "react-hook-form";

const Heart = () => {
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
      <h2 className="text-xl font-semibold mb-4">Health Data Form</h2>
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

        <label>Chest Pain Type (CP):
          <input type="number" {...register("cp", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Resting Blood Pressure (trestbps):
          <input type="number" {...register("trestbps", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Cholesterol (chol):
          <input type="number" {...register("chol", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Fasting Blood Sugar (fbs):
          <input type="number" {...register("fbs", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Resting ECG Results (restecg):
          <input type="number" {...register("restecg", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Max Heart Rate (thalach):
          <input type="number" {...register("thalach", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Thalassemia (thal):
          <input type="number" {...register("thal", { required: true })} className="border p-2 w-full"/>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Heart;