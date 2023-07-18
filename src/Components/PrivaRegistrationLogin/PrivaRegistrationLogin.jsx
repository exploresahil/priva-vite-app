import { Link } from "react-router-dom";

import "./PrivaRegistrationLogin.scss";

import RegisterPlusIco from "./user-plus-solid.svg";
import RegisterIco from "./user-solid.svg";
import CloseIco from "./close.svg";

const Registration = () => {
  return (
    <div className="registration-container">
      <div className="cards">
        <h2>Login</h2>
        <Link to="../Priva-React-Team/" className="close-ico-link">
          <img src={CloseIco} className="close_ico" alt="close svg" />
        </Link>
        <div className="registration-content">
          <Link to="../Priva-React-Team/PrivaFormRegistration">
            <div className="card Register">
              <img
                src={RegisterPlusIco}
                className="plus_ico"
                alt="Register Plus svg"
              />
              <h3>Register</h3>
              <p>One time register only</p>
            </div>
          </Link>
          <Link to="../Priva-React-Team/PrivaLogin">
            <div className="card Login">
              <img src={RegisterIco} alt="Register Plus svg" />
              <h3>Login</h3>
              <p>For already registerd user</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;
