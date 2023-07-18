import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStopCircle } from "react-icons/fa";

import "./PrivaCharging.scss";

const PrivaCharging = () => {
  const [rangeValue, setRangeValue] = useState(() => {
    const storedBrightness = localStorage.getItem("chargingSlider");
    return storedBrightness !== null ? parseInt(storedBrightness) : 0;
  });
  const startingTime = "02:30:00"; // set the starting time here
  const [power, setPower] = useState(0); // initial power delivered is 0

  const handleChange = (event) => {
    const inputVal = event.target.value;
    const maxPower = 150; // set maximum power delivered

    setRangeValue(inputVal);
    localStorage.setItem("chargingSlider", inputVal);
    setPower(((inputVal / 100) * maxPower).toFixed(2)); // this change by @paragkoche .tofixed function convert 0.0000000 -> 0.00
  };

  useEffect(() => {
    const storedchargingSlider = localStorage.getItem("chargingSlider");
    if (storedchargingSlider !== null) {
      setRangeValue(parseInt(storedchargingSlider));
    }
  }, []);

  // convert starting time to seconds
  const startingTimeInSeconds = startingTime
    .split(":")
    .reduce((acc, val, index) => acc + val * Math.pow(60, 2 - index), 0);

  // convert progress from percentage to seconds
  const remainingSeconds = Math.round(
    ((100 - rangeValue) * startingTimeInSeconds) / 100
  );

  // calculate remaining hours, minutes, and seconds
  const remainingHours = Math.floor(remainingSeconds / 3600);
  const remainingMinutes = Math.floor((remainingSeconds % 3600) / 60);
  const remainingSecondsFormatted = remainingSeconds % 60;

  // format the remaining time as "hh:mm:ss"
  const remainingTime = `${remainingHours
    .toString()
    .padStart(2, "0")}:${remainingMinutes
    .toString()
    .padStart(2, "0")}:${remainingSecondsFormatted
    .toString()
    .padStart(2, "0")}`;

  const divStyle = {
    width: `${rangeValue}%`,
    backgroundColor: (() => {
      switch (true) {
        case rangeValue < 25:
          return "#ea4335";
        case rangeValue < 50:
          return "#fbbc04";
        case rangeValue < 75:
          return "#4285f4";
        default:
          return "#34a853";
      }
    })(),
  };

  return (
    <div className="privaMainDiv">
      <div className="charging-container">
        <h1 className="titleCharging">Charging</h1>
        <h2 className="percentage">{rangeValue}% Charged</h2>
        <h2 className="remainimg-time">Time Remaining: {remainingTime}</h2>
        <h2 className="power">Power Delivered: {power} kW</h2>
        <div className="battery-visual-plus"></div>
        <div className="battery-container-main">
          <div className="battery-visual"></div>

          <div class="battery-container">
            <div className="battery-level" style={divStyle}></div>
          </div>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          id="chargingSlider"
          value={rangeValue}
          onChange={handleChange}
        />
      </div>
      <Link to="../Priva-React-Team/PrivaStop">
        <button type="button" className="stopBtn">
          <FaStopCircle />
          Stop
        </button>
      </Link>
    </div>
  );
};

export default PrivaCharging;
