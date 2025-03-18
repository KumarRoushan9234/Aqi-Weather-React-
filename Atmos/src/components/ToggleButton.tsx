import { useState } from "react";

const ToggleButton = ({ onToggle }: { onToggle: () => void }) => {
  const [isAQI, setIsAQI] = useState(true);

  return (
    <button
      className="bg-gray-700 text-white p-2 rounded-lg"
      onClick={() => {
        setIsAQI(!isAQI);
        onToggle();
      }}
    >
      {isAQI ? "Switch to Weather" : "Switch to AQI"}
    </button>
  );
};

export default ToggleButton;
