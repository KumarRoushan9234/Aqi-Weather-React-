import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const WeatherInfo = () => {
  const { data, status } = useSelector((state: RootState) => state.weather);

  if (status === "loading") return <p>Loading weather data...</p>;
  if (status === "failed") return <p>Failed to load weather data.</p>;
  if (!data) return <p>No weather data available.</p>;

  return (
    <div className="bg-blue-600 p-6 rounded-lg shadow-md text-white w-full max-w-md">
      <h2 className="text-xl font-bold">{data.name} Weather</h2>
      <p className="text-lg">Temperature: {data.main.temp}°C</p>
      <p>Wind: {data.wind.speed} m/s</p>
      <p>Humidity: {data.main.humidity}%</p>
    </div>
  );
};

export default WeatherInfo;
