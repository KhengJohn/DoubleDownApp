import React, { useState, useEffect } from "react";
import {
  signupBg,
  rightImage,
  leftImage,
  logoT,
} from "../../common/assets/images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [requestSent, setRequestSent] = useState(false);

  useEffect(() => {
    if (requestSent) {
      const timeout = setTimeout(() => {
        navigate("/reset-password");
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [navigate, requestSent]);

  const toggleRequestState = () => {
    setRequestSent(!requestSent);
  };
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "auto",
        margin: "auto",
        backgroundImage: `url(${signupBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="noScrollBar"
    >
      {" "}
      <Link to={"/"}>
        <div className="logo-container">
          <img
            src={leftImage}
            alt="Animated"
            style={{
              position: "absolute",
              top: "16px",
              left: "3.5vw",
              transform: " rotate(-29.11deg)",
              zIndex: 2,
            }}
          />
          <img
            src={rightImage}
            alt="Animated"
            style={{
              position: "absolute",
              top: "14px",
              left: "5vw",
              transform: " rotate(-29.11deg)",
              zIndex: 1,
            }}
          />{" "}
          <img
            src={logoT}
            alt="logo"
            style={{
              width: "150px",
              position: "absolute",
              top: "16px",
              left: "8vw",
            }}
          />
        </div>
      </Link>
      <div className="glass-bg">
        <form onSubmit={onSubmit} className="signup-form">
          <span className="cormorant-font signup-form-title">
            {requestSent ? "Request Sent." : "Forgot password?"}
          </span>
          <span className="forgot-password-subhead">
            {requestSent
              ? "If that email address is in our system, you will receive an email with instructions about how to reset your password in a few minutes."
              : "Enter your registered email below to receive password reset instructions."}
          </span>
          {!requestSent && (
            <div className="signup-form-group">
              <label for="exampleInputEmail1" className="signup-form-label">
                Email
              </label>
              <input
                type="email"
                className="signup-form-control"
                aria-describedby="nameHelp"
                placeholder="Enter your email"
              />
            </div>
          )}
          {!requestSent && (
            <button onClick={toggleRequestState} className="signup-btn">
              Submit
            </button>
          )}
          {!requestSent && (
            <div className="signup-haveaccount">
              <span style={{ color: "#9F9694" }}>Remember password?</span>
              <Link
                style={{
                  color: "#D1A757",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                to={"/sign-in"}
              >
                <span>Log in</span>
              </Link>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
