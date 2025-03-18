import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Weather from "./Weather";
import AirQuality from "./AirQuality";
import ToggleButton from "../components/ToggleButton";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";
import { fetchAirQuality } from "../redux/airQualitySlice";
import { getUserLocation } from "../utils/getLocation";

const Main = () => {
  const [showAQI, setShowAQI] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchInitialData = async () => {
      const city = await getUserLocation();
      dispatch(fetchWeather(city));
      dispatch(fetchAirQuality(city));
    };

    fetchInitialData();
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="text-center p-4">
        {/* <ToggleButton onToggle={() => setShowAQI(!showAQI)} /> */}
        {showAQI ? <AirQuality /> : <Weather />}
      </div>
    </div>
  );
};

export default Main;
