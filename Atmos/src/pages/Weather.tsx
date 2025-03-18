import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Weather = () => {
  const weather = useSelector((state: RootState) => state.weather.data);

  return (
    <div className="p-4 text-center">
      {weather ? (
        <>
          <h1 className="text-2xl font-bold">{weather.name}</h1>
          <p>🌡 Temperature: {weather.main.temp}°C</p>
          <p>💨 Wind Speed: {weather.wind.speed} m/s</p>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
};

export default Weather;
