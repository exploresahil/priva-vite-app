import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./PrivaHeader.scss";

import privaLogo from "./privaLogo.svg";
import openIcon from "./assets/expand.svg";
import closeIcon from "./assets/compress.svg";

const OpenIcon = () => {
  return <img className="fullScreen" src={openIcon} alt="Open Icon" />;
};

const CloseIcon = () => {
  return <img className="fullScreen" src={closeIcon} alt="Close Icon" />;
};

const PrivaHeader = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleFullScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      setIsFullScreen(false);
    } else {
      document.documentElement.requestFullscreen();
      setIsFullScreen(true);
    }
  };

  //*----------> Date and Time Function

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  //*----------> Header Component

  return (
    <div className="header">
      <Link to="./Priva-React-Team/">
        <img src={privaLogo} alt="Priva Logo" />
      </Link>
      <div className="brand-full-name">
        <p>Priva Technologies pvt. Ltd.</p>
      </div>
      <button
        className="fullScreenButton"
        id="fullScreenButto"
        onClick={handleFullScreen}
      >
        {isFullScreen ? <CloseIcon /> : <OpenIcon />}
      </button>
      <div>
        <div>{date.toLocaleDateString()}</div>
        <div>{time}</div>
      </div>
    </div>
  );
};

export default PrivaHeader;
