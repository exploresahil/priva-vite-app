import "./PrivaUserDetails.scss";
import CloseIco from "./close.svg";
import { Link } from "react-router-dom";

const PrivaUserDetails = () => {
  return (
    <div className="privaMainDiv">
      <div className="userDetailsContainer">
        <h2 className="title">User Details</h2>
        <Link to="../Priva-React-Team/">
          <img src={CloseIco}></img>
        </Link>
        <div className="userDetials">
          <h3>
            <span>Name:</span> firstname lastName
          </h3>
          <h3>
            <span>Mobile Number:</span> +91 1234567890
          </h3>
          <h3>
            <span>Email ID:</span> email@example.com
          </h3>
        </div>
        <h2 className="historyTitle">Charging History</h2>
        <div className="historyContainerMain">
          <div className="historyContainer">
            <div className="history">
              <h3>
                1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
            </div>
            <div className="history">
              <h3>
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
            </div>
            <div className="history">
              <h3>
                3. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
            </div>
            <div className="history">
              <h3>
                4. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
            </div>
            <div className="history">
              <h3>
                5. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
            </div>
            <div className="history">
              <h3>
                6. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
            </div>
            <div className="history">
              <h3>
                7. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
            </div>
            <div className="history">
              <h3>
                8. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </h3>
            </div>
          </div>
        </div>
        <div className="buttons nav">
          <Link to="../Priva-React-Team/PrivaLogin">
            <button type="button">Back</button>
          </Link>
          <Link to="../Priva-React-Team/PrivaChargeStatus">
            <button type="button">Proceed</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivaUserDetails;
