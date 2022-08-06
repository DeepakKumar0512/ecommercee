import React from "react";
import '../style/SignIn.css';

const SignIn = ({ loginSubmit, otpSubmit, viewOtpForm }) => {
  return (
    <div className="wrapper">
      {!viewOtpForm ? (
        <div className="form-wrapper">
          <form id="loginForm text-center" onSubmit={loginSubmit}>
            <div className="input-field">
             
              <input className="mobile form-control"
                type="text"
                placeholder="Enter your phone number"
                name="phone"
                autoComplete="false"
              />
            </div>
            <button className="main-button my-3 btn btn-primary mt-2" type="submit" id="sign-in-button">
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="form-wrapper" onSubmit={otpSubmit}>
          <form id="otpForm">
            <div className="input-field">
              <label>Enter OTP</label>
                <input
                  type="number"
                  placeholder="One time password"
                  name="otp_value"
                  autoComplete="false"
              />
            </div>
            <button className="main-button btn btn-primary mt-2" type="submit">
              Verify OTP
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignIn;