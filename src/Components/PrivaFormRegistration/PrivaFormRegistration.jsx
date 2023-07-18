import { Link } from "react-router-dom";
import "./PrivaFormRegistration.scss";

const PrivaFormRegistration = () => {
  //*----------> Registration Form Component

  return (
    <div className="registration-form">
      <form className="registration-form-container">
        <h2 className="form-title">Registration Form</h2>
        <div className="registration-form-container-lable full-name-imput">
          <label>Full Name</label>
          <input
            className="fname"
            type="text"
            name="firstName"
            required
            placeholder="First Name"
          />
          <input
            className="lname"
            type="text"
            name="lastName"
            required
            placeholder="Last Name"
          />
        </div>
        <div className="registration-form-container-lable mob-no">
          <label>Mobile Number</label>
          <select required>
            <option value="" selected disabled>
              +00
            </option>
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+61">+61</option>
            <option value="+20">+21</option>
            <option value="+44">+44</option>
            <option value="+33">+33</option>
          </select>
          <input
            type="tel"
            id="number"
            name="number"
            minlength="9"
            maxlength="14"
            placeholder="Enter Mobile Number"
            required
            onkeypress="numberonly(this)"
          />
        </div>
        <div className="registration-form-container-lable">
          <label>Email</label>
          <input
            className="one-input"
            type="email"
            name="emailAddress"
            placeholder="Enter Email-id"
            required
          />
        </div>
        <div className="buttons">
          <Link to="../Priva-React-Team/PrivaRegistrationLogin">
            <button type="button">Back</button>
          </Link>
          <Link to="../Priva-React-Team/PrivaRegistrationLogin">
            <button type="button">Success</button>
          </Link>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PrivaFormRegistration;
