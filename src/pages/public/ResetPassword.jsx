import React from "react";
import {
  signupBg,
  rightImage,
  leftImage,
  logoT,
} from "../../common/assets/images";
import { Link } from "react-router-dom";

const ResetPassword = () => {
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
        {" "}
        <form onSubmit={onSubmit} className="signup-form">
          <span className="cormorant-font signup-form-title">
            Forgot password?
          </span>
          <span className="forgot-password-subhead">
            Choose a new password for your account.
          </span>
          <div className="signup-form-group">
            <label for="password" className="signup-form-label">
              New Password
            </label>
            <div>
              <input
                type="password"
                className="signup-form-control"
                placeholder="Enter password"
              />
              <span style={{ fontSize: "12px" }}>
                It must be at least 8 characters.
              </span>
            </div>
          </div>
          <div className="signup-form-group">
            <label for="password" className="signup-form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="signup-form-control"
              placeholder="Enter password"
            />
          </div>

          <button className="signup-btn">Submit</button>
          <div className="signup-haveaccount">
            <span style={{ color: "#9F9694" }}>Remember Password?</span>
            <Link
              style={{
                color: "#D1A757",
                cursor: "pointer",
                textDecoration: "none",
              }}
              to={"/sign-in"}
            >
              <span>Log In</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
