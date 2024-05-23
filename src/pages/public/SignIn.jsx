import React from "react";
import {
  signupBg,
  googleIcon,
  rightImage,
  leftImage,
  logoT,
} from "../../common/assets/images";
import { Link } from "react-router-dom";

const SignIn = () => {
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
              fontSize: "25px",
              fontWeight: 600,
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: "89%",
              color: "#D1A757",
            }}
          >
            Sign In To
            <br /> Double Down
          </span>
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
          <div className="signup-form-group">
            <label for="password" className="signup-form-label">
              Password
            </label>
            <input
              type="password"
              className="signup-form-control"
              placeholder="Your password"
            />
          </div>
          <Link
            style={{
              display: "flex",
              color: "#D1A757",
              textAlign: "center",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "10px",
            }}
            to={"/forgot-password"}
          >
            <span>Forget your password?</span>
          </Link>
          <button className="signup-btn">Sign In</button>
          <span className="signup-form-divider">Or sign up using</span>
          <button className="signupGoogle-btn">
            <img src={googleIcon} alt="google" />
            Sign In with Google
          </button>
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
            <span style={{ color: "#9F9694" }}>Have an account?</span>
            <Link
              style={{
                color: "#D1A757",
                cursor: "pointer",
                textDecoration: "none",
              }}
              to={"/sign-up"}
            >
              <span>Sign Up</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
