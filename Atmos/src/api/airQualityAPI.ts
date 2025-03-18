import axios from "axios";

const API_KEY = "9bb3b5cd33ee4875f007bd584fa0f40c";
const BASE_URL = "https://api.openweathermap.org/data/2.5/air_pollution";

export const fetchAQI = async (lat: number, lon: number) => {
  try {
    const response = await axios.get(`${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching air quality data:", error);
    return null;
  }
};
