import { useState } from "react";
import { WiCloud } from "react-icons/wi"; // Weather Icon
import { FaSmog } from "react-icons/fa"; // AQI Icon

const ToggleButton = ({ onToggle }: { onToggle: () => void }) => {
  const [isAQI, setIsAQI] = useState(true);

  return (
    <button
      className="bg-gray-700 text-white p-2 rounded-lg flex items-center justify-center w-12 h-12"
      onClick={() => {
        setIsAQI(!isAQI);
        onToggle();
      }}
    >
      {isAQI ? <FaSmog size={24} /> : <WiCloud size={24} />}
    </button>
  );
};

export default ToggleButton;
