import axios from "axios";

const API_URL = "https://minor-flask-0jcm.onrender.com"; 

export const predict = async (modelName, inputData) => {
    try {
        const response = await axios.post(`${API_URL}/predict/${modelName}`, inputData);
        return response.data.prediction || response.data; // Handle response properly
    } catch (error) {
        console.error("Prediction error:", error.response ? error.response.data : error.message);
        return { error: "Prediction failed. Check input and try again." };
    }
};
