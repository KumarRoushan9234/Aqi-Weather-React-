import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAQI } from "../redux/airQualitySlice";
import { getWeather } from "../redux/weatherSlice";
import ToggleButton from "../components/ToggleButton";
import SearchBar from "../components/SearchBar";
import AQIInfo from "../components/AQIInfo";
import WeatherInfo from "../components/WeatherInfo";

const Home = () => {
  const [showAQI, setShowAQI] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        dispatch(getAQI({ lat: latitude, lon: longitude }));
        dispatch(getWeather({ lat: latitude, lon: longitude }));
      },
      (error) => console.error("Error getting location:", error)
    );
  }, [dispatch]);

  const handleSearch = (city: string) => {
    // Add search logic using city name
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <SearchBar onSearch={handleSearch} />
      <ToggleButton onToggle={() => setShowAQI(!showAQI)} />
      {showAQI ? <AQIInfo /> : <WeatherInfo />}
    </div>
  );
};

export default Home;
