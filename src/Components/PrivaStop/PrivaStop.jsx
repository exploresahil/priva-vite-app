import { useState, useEffect } from "react";
import { IoIosWarning } from "react-icons/io";
import { Link } from "react-router-dom";

import "./PrivaStop.scss";

const PrivaStop = () => {
  //*----------> On-Screen Mobile Number Input Function

  const [number, setNumber] = useState("+91 ");

  const handleClick = (e) => {
    const value = e.target.value;
    if (value === "clear") {
      setNumber("+91");
    } else if (value === "confirm") {
      console.log("Number confirmed: ", number);
    } else if (value === "backspace") {
      if (number.length > 4) {
        setNumber(number.slice(0, -1));
      }
    } else {
      if (number.length < 14) {
        setNumber(number + value);
      }
    }
  };

  const [color, setColor] = useState("#ea4335");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setColor((prevColor) =>
        prevColor === "#ea4335" ? "#fbbc04" : "#ea4335"
      );
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="privaMainDiv">
      <div className="stopContainerMain">
        <h1>Emergancy Stop</h1>
        <div className="warningContainer">
          <IoIosWarning size="200px" style={{ color }} className="warning" />
          <h3>Please enter your registered mobile number to confirm.</h3>
        </div>

        <div className="login">
          <input type="text" value={number} readOnly />
          <br />

          <div className="numbers">
            <button value="1" onClick={handleClick}>
              1
            </button>
            <button value="2" onClick={handleClick}>
              2
            </button>
            <button value="3" onClick={handleClick}>
              3
            </button>
            <button value="4" onClick={handleClick}>
              4
            </button>
            <button value="5" onClick={handleClick}>
              5
            </button>
            <button value="6" onClick={handleClick}>
              6
            </button>
            <button value="7" onClick={handleClick}>
              7
            </button>
            <button value="8" onClick={handleClick}>
              8
            </button>
            <button value="9" onClick={handleClick}>
              9
            </button>
            <button value="clear" onClick={handleClick}>
              Clear
            </button>

            <button value="0" onClick={handleClick}>
              0
            </button>
            <Link to="../Priva-React-Team/PrivaThankYou">
              <button value="confirm" onClick={handleClick}>
                Confirm
              </button>
            </Link>
            <button
              className="backspace"
              value="backspace"
              onClick={handleClick}
            >
              <svg fill="#fff" viewBox="0 0 576 512">
                <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zM271 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
              </svg>
            </button>
          </div>
          <Link to="../Priva-React-Team/PrivaCharging">
            <button className="bactToRegistrationLogin ContinueCharging">
              Continue Charging
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivaStop;
