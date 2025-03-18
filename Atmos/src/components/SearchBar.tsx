import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  return (
    <div className="flex bg-white p-2 rounded-lg text-black">
      <input
        type="text"
        placeholder="Search location..."
        className="p-2 outline-none w-full"
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
