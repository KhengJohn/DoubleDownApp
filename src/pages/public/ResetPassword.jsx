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
        <form
          onSubmit={onSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            width: "60%",
          }}
        >
          <span
            className="cormorant-font"
            style={{
              fontSize: "23px",
              fontWeight: 600,
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: "89%",
              color: "#D1A757",
            }}
          >
            Forgot password?
          </span>
          <span
            style={{
              fontFamily: "gordita-font",
              fontSize: "12px",
              color: "#c7c7c7",
              textAlign: "center",
              fontWeight: 100,
              lineHeight: "135%",
            }}
          >
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
              <span style={{ fontSize: "10px" }}>
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
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontSize: "10px",
            }}
          >
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
