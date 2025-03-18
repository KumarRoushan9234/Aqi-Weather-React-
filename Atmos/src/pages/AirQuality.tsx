import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const AirQuality = () => {
  const airQuality = useSelector((state: RootState) => state.airQuality.data);

  return (
    <div className="p-4 text-center">
      {airQuality ? (
        <>
          <h1 className="text-2xl font-bold">Air Quality Index</h1>
          <p>🌿 AQI: {airQuality.list[0].main.aqi}</p>
        </>
      ) : (
        <p>Loading AQI data...</p>
      )}
    </div>
  );
};

export default AirQuality;
