import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PrivaChargeStatus.scss";

const PrivaChargeStatus = () => {
  const [selectedButton, setSelectedButton] = useState("button%");
  const [selectedButtonOne, setSelectedButtonOne] = useState("button50%");
  const [selectedButtonTwo, setSelectedButtonTwo] = useState("button₹50");

  const handleClick = (button) => {
    setSelectedButton(button);
  };

  const handleClickOne = (button) => {
    setSelectedButtonOne(button);
  };

  const handleClickTwo = (button) => {
    setSelectedButtonTwo(button);
  };

  return (
    <div className="privaMainDiv">
      <div className="charge-main-container">
        <h2 className="statush2">Current Battery Status: 25%</h2>
        <h3 className="setValue">Choose to set limit</h3>
        <div className="options select-charge-option">
          <button
            type="button"
            className={`submitOption ${
              selectedButton === "button%" ? "selectedOption" : ""
            }`}
            onClick={() => handleClick("button%")}
          >
            By %
          </button>
          <button
            type="button"
            className={`submitOption ${
              selectedButton === "button₹" ? "selectedOption" : ""
            }`}
            onClick={() => handleClick("button₹")}
          >
            By ₹
          </button>
        </div>

        <h3 className="setValue">Set Value</h3>

        <div
          className={`options select-charge-option-select ${
            selectedButton === "button%" ? "activeOption" : ""
          }`}
        >
          <button
            type="button"
            className={`submitOption ${
              selectedButtonOne === "button50%" ? "selectedOption" : ""
            }`}
            onClick={() => handleClickOne("button50%")}
          >
            50%
          </button>
          <button
            type="button"
            className={`submitOption ${
              selectedButtonOne === "button100%" ? "selectedOption" : ""
            }`}
            onClick={() => handleClickOne("button100%")}
          >
            100%
          </button>
          <button
            type="button"
            className={`submitOption ${
              selectedButtonOne === "buttonCustom" ? "selectedOption" : ""
            }`}
            onClick={() => handleClickOne("buttonCustom")}
          >
            Custom
          </button>
        </div>
        <div
          className={`options select-charge-option-select ${
            selectedButton === "button₹" ? "activeOption" : ""
          }`}
        >
          <button
            type="button"
            className={`submitOption ${
              selectedButtonTwo === "button₹50" ? "selectedOption" : ""
            }`}
            onClick={() => handleClickTwo("button₹50")}
          >
            ₹50
          </button>
          <button
            type="button"
            className={`submitOption ${
              selectedButtonTwo === "button₹100" ? "selectedOption" : ""
            }`}
            onClick={() => handleClickTwo("button₹100")}
          >
            ₹100
          </button>
          <button
            type="button"
            className={`submitOption ${
              selectedButtonTwo === "buttonCustom" ? "selectedOption" : ""
            }`}
            onClick={() => handleClickTwo("buttonCustom")}
          >
            Custom
          </button>
        </div>
        <div className="buttonOption">
          <Link to="../Priva-React-Team/PrivaUserDetails">
            <button className="submitOption" type="submit">
              Back
            </button>
          </Link>
          <Link to="../Priva-React-Team/PrivaCharging">
            <button className="submitOption" type="submit">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivaChargeStatus;
