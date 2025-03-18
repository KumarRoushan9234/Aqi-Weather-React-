import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";
import { fetchAirQuality } from "../redux/airQualitySlice";
import { FaSearch } from "react-icons/fa";

// 🌍 Geolocation API for autocomplete suggestions
const GEO_API_URL = "https://api.openweathermap.org/geo/1.0/direct";
const API_KEY = "be8402261b9ef99460c755b79e4157d6"; // ⚠️ Replace with your API Key

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const dispatch = useDispatch();

  // 🔍 Fetch location suggestions
  const fetchLocationSuggestions = async (query: string) => {
    if (!query) return setSuggestions([]); // Clear suggestions if input is empty

    try {
      const res = await fetch(`${GEO_API_URL}?q=${query}&limit=5&appid=${API_KEY}`);
      const data = await res.json();
      setSuggestions(data); // Store location suggestions
    } catch (error) {
      console.error("Error fetching location suggestions:", error);
    }
  };

  // 🌍 Handle user selecting a location
  const handleSelectLocation = (location: any) => {
    setQuery(location.name);
    setSuggestions([]); // Hide suggestions after selecting

    const city = location.name;
    dispatch(fetchWeather(city));
    dispatch(fetchAirQuality(city));
  };

  return (
    <div className="relative">
      <div className="flex bg-gray-700 p-2 rounded-lg text-white">
        <input
          type="text"
          placeholder="Search location..."
          className="p-2 bg-transparent outline-none w-full"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            fetchLocationSuggestions(e.target.value);
          }}
        />
        <button onClick={() => fetchLocationSuggestions(query)} className="p-2">
          <FaSearch size={20} />
        </button>
      </div>

      {/* 🌍 Location Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 bg-gray-800 text-white rounded-lg mt-1 shadow-lg">
          {suggestions.map((location, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-700"
              onClick={() => handleSelectLocation(location)}
            >
              {location.name}, {location.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
