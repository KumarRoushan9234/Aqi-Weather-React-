import { WiCloud } from "react-icons/wi"; // Weather Icon
import { FaSmog } from "react-icons/fa"; // AQI Icon

const ToggleButton = ({ showAQI, setShowAQI }: { showAQI: boolean; setShowAQI: (val: boolean) => void }) => {
  return (
    <button
      className="bg-gray-700 text-white p-2 rounded-lg flex items-center justify-center w-12 h-12"
      onClick={() => setShowAQI(!showAQI)}
    >
      {showAQI ? <FaSmog size={24} /> : <WiCloud size={24} />}
    </button>
  );
};

export default ToggleButton;
