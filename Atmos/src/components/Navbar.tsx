import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";
import { fetchAirQuality } from "../redux/airQualitySlice";
import { getUserLocation } from "../utils/getLocation";
import SearchBar from "./SearchBar";
import ToggleButton from "./ToggleButton";

const Navbar = ({ showAQI, setShowAQI }: { showAQI: boolean; setShowAQI: (val: boolean) => void }) => {
  const [location, setLocation] = useState("New Delhi");
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLocation = async () => {
      const city = await getUserLocation();
      setLocation(city);
      dispatch(fetchWeather(city));
      dispatch(fetchAirQuality(city));
    };
    fetchLocation();
  }, [dispatch]);

  return (
    <nav className="bg-gray-900 p-4 flex justify-between items-center text-white">
      <h1 className="text-2xl font-bold">🌍 Atmos</h1>
      <SearchBar />
      <p className="text-lg font-semibold">{location}</p> {/* Show Location */}
      <ToggleButton showAQI={showAQI} setShowAQI={setShowAQI} />
    </nav>
  );
};

export default Navbar;
