import { useState } from "react";

const ToggleButton = ({ onToggle }: { onToggle: () => void }) => {
  return (
    <button onClick={onToggle} className="bg-blue-500 text-white p-2 rounded-lg transition hover:bg-blue-700">
      Toggle AQI / Weather
    </button>
  );
};

export default ToggleButton;
