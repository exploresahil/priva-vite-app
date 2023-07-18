import { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";

import "./PrivaMain.scss";

import helloAudio from "./hello.mp3";

const PrivaMain = ({ volume }) => {
  //*----------> Audio Play function
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = localStorage.getItem("volume") / 100 || 1;
    audio.play();

    const interval = setInterval(() => {
      audio.currentTime = 0;
      audio.play();
    }, 20000);

    return () => {
      clearInterval(interval);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  //*----------> Animation with gsap

  useEffect(() => {
    const readyOne = new SplitType(".ready", {
      types: "chars",
      charClass: "readyOneChar",
    });

    gsap.from(readyOne.chars, {
      y: -500,
      opacity: 0,
      duration: 0.3,
      delay: 0.5,
      repeatDelay: 2,
      stagger: { amount: 0.3 },
      ease: "Power1.easeOut",
      repeat: -1,
    });

    gsap.to(readyOne.chars, {
      y: 500,
      opacity: 0,
      duration: 0.3,
      delay: 2.5,
      stagger: { amount: 0.3 },
      ease: "Power1.easeOut",
      repeat: -1,
      repeatDelay: 2,
    });

    const readyTwo = new SplitType(".ready-after", {
      types: "chars",
      charClass: "readyTwoChar",
    });

    gsap.from(readyTwo.chars, {
      y: -500,
      opacity: 0,
      duration: 0.3,

      repeatDelay: 2,
      stagger: { amount: 0.3 },
      ease: "Power1.easeOut",
      repeat: -1,
    });

    gsap.to(readyTwo.chars, {
      y: 500,
      opacity: 0,
      duration: 0.3,
      delay: 0.5,
      stagger: { amount: 0.3 },
      ease: "Power1.easeOut",
      repeat: -1,
      repeatDelay: 2,
    });
  }, []);

  //*----------> Home Component

  return (
    <div className="privaMain">
      <h3>Hello, I am</h3>
      <div className="ready__container">
        <h2 className="ready">Ready</h2>
        <h2 className="ready-after">Ready</h2>
      </div>
      <h3>To Charge your Vehicle</h3>
      <p>please plug in the charger</p>
      <audio ref={audioRef} src={helloAudio} />
    </div>
  );
};

export default PrivaMain;
