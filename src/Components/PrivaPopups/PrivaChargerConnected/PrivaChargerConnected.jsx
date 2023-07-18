import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

//*----------> Import Split-Type

import SplitType from "split-type";

//*----------> Import Gsap

import gsap from "gsap";

//*----------> Import scss

import "./PrivaChargerConnected.scss";

//*----------> Import Audio

import connectedAudio from "./charger_connected.mp3";

//*----------------------------------------> Main Component

const PrivaChargerConnected = ({ volume }) => {
  //*----------> Audio Play Function

  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = localStorage.getItem("volume") / 100 || 1;
    audio.play();

    const interval = setInterval(() => {
      audio.currentTime = 0;
      audio.play();
    }, 5000);

    return () => {
      clearInterval(interval);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  //*----------> Animate with Gsap

  const navigate = useNavigate();

  useEffect(() => {
    const chargerConnected = new SplitType(".chargerConnected", {
      types: "lines",
      lineClass: "readyOneChar",
    });

    gsap.from(chargerConnected.lines, {
      y: 50,
      opacity: 0,
      duration: 0.1,
      stagger: { amount: 0.1 },
      ease: "Power1.easeOut",
    });

    gsap.to(chargerConnected.lines, {
      y: -50,
      opacity: 0,
      delay: 1,
      duration: 0.1,
      stagger: { amount: 0.1 },
      ease: "Power1.easeOut",
    });

    setTimeout(function () {
      navigate("../../Priva-React-Team/PrivaRegistrationLogin");
    }, 1500);
  }, []);

  //*----------> Popup Component

  return (
    <div className="privaMainDiv">
      <div className="charger-connected-container">
        <h3 className="chargerConnected">Charger Connected</h3>
      </div>
      <audio ref={audioRef} src={connectedAudio} />
    </div>
  );
};

export default PrivaChargerConnected;
