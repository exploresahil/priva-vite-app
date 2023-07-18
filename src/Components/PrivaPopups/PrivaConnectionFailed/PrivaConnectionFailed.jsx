import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SplitType from "split-type";
import gsap from "gsap";
import "./PrivaConnectionFailed.scss";
import failedAudio from "./connection_failed.mp3";

const PrivaConnectionFailed = ({ volume }) => {
  //*----------> Audio Paly Function
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

  //*----------> Animation with gsap

  const navigate = useNavigate();

  useEffect(() => {
    const connectionFailed = new SplitType(".connectionFailed", {
      types: "lines",
      lineClass: "readyOneChar",
    });

    gsap.from(connectionFailed.lines, {
      y: 50,
      opacity: 0,
      duration: 0.1,
      stagger: { amount: 0.1 },
      ease: "Power1.easeOut",
    });

    gsap.to(connectionFailed.lines, {
      y: -50,
      opacity: 0,
      delay: 1,
      duration: 0.1,
      stagger: { amount: 0.1 },
      ease: "Power1.easeOut",
    });

    setTimeout(function () {
      navigate("../../Priva-React-Team/");
    }, 1500);
  }, []);

  //*----------> Popup Component

  return (
    <div className="privaMainDiv">
      <div className="connection-failed-container">
        <h3 className="connectionFailed">Connection Failed!</h3>
      </div>
      <audio ref={audioRef} src={failedAudio} />
    </div>
  );
};

export default PrivaConnectionFailed;
