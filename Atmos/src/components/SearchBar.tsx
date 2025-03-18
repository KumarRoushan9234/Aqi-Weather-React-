import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSearch(input);
      setInput("");
    }
  };

  return (
    <div className="flex items-center bg-gray-700 p-3 rounded-lg">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search city..."
        className="bg-transparent outline-none text-white flex-1"
      />
      <button onClick={handleSearch} className="text-white">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBar;
