import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AirQuality = () => {
  const airQuality = useSelector((state: RootState) => state.airQuality.data);
  const weather = useSelector((state: RootState) => state.weather.data);

  if (!airQuality || !weather) return <p className="text-white">Loading AQI data...</p>;

  const aqiLevel = airQuality.list?.[0]?.main?.aqi || "N/A";
  const pm25 = airQuality.list?.[0]?.components?.pm2_5 || "N/A";
  const pm10 = airQuality.list?.[0]?.components?.pm10 || "N/A";

  return (
    <div className="p-6 text-center max-w-md mx-auto bg-gray-800 text-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold">{weather.name} - Air Quality Index</h1>
      <p className="text-lg">🌿 AQI: <span className="font-semibold">{aqiLevel}</span></p>
      <p>🌬️ PM2.5: <span className="font-semibold">{pm25}</span> µg/m³</p>
      <p>☁️ PM10: <span className="font-semibold">{pm10}</span> µg/m³</p>
    </div>
  );
};

export default AirQuality;
