import { useState } from "react";
import Navbar from "../components/Navbar";
import Weather from "./Weather";
import AirQuality from "./AirQuality";
import ToggleButton from "../components/ToggleButton";

const Main = () => {
  const [showAQI, setShowAQI] = useState(true);

  return (
    <div>
      <Navbar />
      <div className="text-center p-4">
        <ToggleButton onToggle={() => setShowAQI(!showAQI)} />
        {showAQI ? <AirQuality /> : <Weather />}
      </div>
    </div>
  );
};

export default Main;
