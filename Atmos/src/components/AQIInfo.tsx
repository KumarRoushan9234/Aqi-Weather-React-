import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AQIInfo = () => {
  const { data, status } = useSelector((state: RootState) => state.airQuality);

  if (status === "loading") return <p>Loading AQI data...</p>;
  if (status === "failed") return <p>Failed to load AQI data.</p>;
  if (!data) return <p>No AQI data available.</p>;

  const aqi = data.list[0].main.aqi;
  const pollutant = data.list[0].components;

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white w-full max-w-md">
      <h2 className="text-xl font-bold">Air Quality Index</h2>
      <p className="text-lg">AQI: {aqi}</p>
      <p>Main Pollutant: {pollutant.pm10 ? "PM10" : "PM2.5"}</p>
    </div>
  );
};

export default AQIInfo;
