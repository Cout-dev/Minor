import React from "react";
import { useForm } from "react-hook-form";

const Diabetes = () => {  // Fixed Component Name
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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-xl font-semibold mb-4">Health Data Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <label>Age:
          <input type="number" {...register("age", { required: true })} className="border p-2 w-full"/>
        </label>
        {errors.age && <p className="text-red-500">Age is required</p>}

        <label>Family Diabetes:
          <select {...register("familyDiabetes")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>
        
        <label>High BP:
          <select {...register("highBP")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>BMI:
          <input type="number" step="0.1" {...register("bmi", { required: true })} className="border p-2 w-full"/>
        </label>
        {errors.bmi && <p className="text-red-500">BMI is required</p>}

        <label>Alcohol Consumption:
          <select {...register("alcohol")} className="border p-2 w-full">
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>Sleep (hours):
          <input type="number" {...register("sleep", { required: true })} className="border p-2 w-full"/>
        </label>

        <label>Regular Medicine:
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
          <input type="number" {...register("stress")} className="border p-2 w-full"/>
        </label>

        <label>BP Level:
          <input type="number" {...register("bpLevel")} className="border p-2 w-full"/>
        </label>

        <label>Pregnancies:
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
    </div>
  );
};

export default Diabetes;  // Fixed Export
