import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Thyroid = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:5000";

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      // Convert string values to numbers
      const formattedData = {
        "Breathing Problem": Number(data.breathingProblem),
        Fever: Number(data.fever),
        "Dry Cough": Number(data.dryCough),
        "Sore throat": Number(data.soreThroat),
        "Hyper Tension": Number(data.hyperTension),
        "Abroad travel": Number(data.abroadTravel),
        "Contact with COVID Patient": Number(data.contactCovid),
        "Attended Large Gathering": Number(data.largeGathering),
        "Visited Public Exposed Places": Number(data.publicExposed),
        "Family working in Public Exposed Places": Number(
          data.familyPublicExposed
        ),
      };

      console.log("📤 Sending Data:", formattedData);

      const response = await fetch(`${API_URL}/predict/covid`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      const responseData = await response.json();
      console.log("📥 Received Response:", responseData);

      setResult(responseData["COVID Risk Prediction"]);
    } catch (error) {
      console.error("❌ Error:", error);
      alert("Error connecting to the backend!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-semibold mb-4">COVID-19 Risk Assessment</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <label>
          Breathing Problem:
          <select
            {...register("breathingProblem", { required: true })}
            className="border p-2 w-full"
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>
          Fever:
          <select
            {...register("fever", { required: true })}
            className="border p-2 w-full"
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>
          Dry Cough:
          <select
            {...register("dryCough", { required: true })}
            className="border p-2 w-full"
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>
          Sore Throat:
          <select
            {...register("soreThroat", { required: true })}
            className="border p-2 w-full"
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>
          Hyper Tension:
          <select
            {...register("hyperTension", { required: true })}
            className="border p-2 w-full"
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>
          Abroad Travel:
          <select
            {...register("abroadTravel", { required: true })}
            className="border p-2 w-full"
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>
          Contact with COVID Patient:
          <select
            {...register("contactCovid", { required: true })}
            className="border p-2 w-full"
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>
          Attended Large Gathering:
          <select
            {...register("largeGathering", { required: true })}
            className="border p-2 w-full"
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>
          Visited Public Exposed Places:
          <select
            {...register("publicExposed", { required: true })}
            className="border p-2 w-full"
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>
        <label>
          Family Working in Public Exposed Places:
          <select
            {...register("familyPublicExposed", { required: true })}
            className="border p-2 w-full"
          >
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
          disabled={loading}
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>

      {result !== null && (
        <div
          className={`mt-4 p-4 rounded ${
            result === "1"
              ? "bg-red-100 border border-red-400 text-red-700"
              : "bg-green-100 border border-green-400 text-green-700"
          }`}
        >
          <h3 className="text-lg font-semibold">COVID Risk Prediction:</h3>
          <p className="text-xl">{result}</p>
          {result === "1" ? (
            <p className="text-red-600 font-semibold">
              Visit a hospital and isolate immediately.
            </p>
          ) : (
            <p className="text-green-600 font-semibold">
              Stay cautious, but no immediate risk detected.
            </p>
          )}
          <a
            href="https://www.youtube.com/watch?v=s0t1JISINO0&ab_channel=StanfordCenterforHealthEducation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Watch COVID-19 Prevention Tips
          </a>
        </div>
      )}
    </div>
  );
};

export default Thyroid;
