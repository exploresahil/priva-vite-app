import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./PrivaThankYou.scss";

const PrivaThankYou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(function () {
      navigate("../../Priva-React-Team/");
    }, 5000);
  }, []);

  return (
    <div className="privaMainDiv">
      <div className="privaThankYou">
        <h1>Thank You</h1>
        <p>Please visit us again.</p>
        <p>
          You have charged <span>100kW @₹500</span>.
        </p>
        <p>
          The Invoice for this charge will be sent to your mobile number via
          message.
        </p>
      </div>
    </div>
  );
};

export default PrivaThankYou;
