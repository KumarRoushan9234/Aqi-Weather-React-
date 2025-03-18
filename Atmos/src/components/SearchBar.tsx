import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../redux/weatherSlice";
import { fetchAirQuality } from "../redux/airQualitySlice";

import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchWeather(query));
      dispatch(fetchAirQuality(query));
    }
  };

  return (
    <div className="flex bg-gray-700 p-2 rounded-lg text-white">
      <input
        type="text"
        placeholder="Search location..."
        className="p-2 bg-transparent outline-none w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch} className="p-2">
        <FaSearch size={20} />
      </button>
    </div>
  );
};

export default SearchBar;
