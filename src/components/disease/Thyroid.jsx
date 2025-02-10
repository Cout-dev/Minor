import React from "react";
import { useForm } from "react-hook-form";

const Thyroid = () => {
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
      <h2 className="text-xl font-semibold mb-4">Predict your Thyriod</h2>
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

        <label>TT4:
          <input type="number" step="0.1" {...register("TT4", { required: true })} className="border p-2 w-full"/>
        </label>
        
        <label>T3:
          <input type="number" step="0.1" {...register("T3", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>T4U:
          <input type="number" step="0.01" {...register("T4U", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>FTI:
          <input type="number" step="0.1" {...register("FTI", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>TSH:
          <input type="number" step="0.1" {...register("TSH", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Pregnant:
          <select {...register("pregnant", { required: true })} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Thyroid;