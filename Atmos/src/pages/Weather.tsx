import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Weather = () => {
  const weather = useSelector((state: RootState) => state.weather.data);

  if (!weather) return <p className="text-white">Loading weather data...</p>;

  return (
    <div className="p-6 text-center max-w-md mx-auto bg-gray-800 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">{weather.name} - Weather</h1>
      <p className="text-lg">🌡 Temperature: <span className="font-semibold">{weather.main.temp}°C</span></p>
      <p>💨 Wind Speed: <span className="font-semibold">{weather.wind.speed} m/s</span></p>
      <p>💧 Humidity: <span className="font-semibold">{weather.main.humidity}%</span></p>
    </div>
  );
};

export default Weather;
