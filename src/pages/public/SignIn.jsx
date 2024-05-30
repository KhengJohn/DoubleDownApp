import React, {useState} from "react";
import {
  signupBg,
  googleIcon,
  rightImage,
  leftImage,
  logoT,
  hidePassword
} from "../../common/assets/images";
import { Link } from "react-router-dom";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
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
          onSubmit={onSubmit}   className="signup-form"
        >
          <span
            className="cormorant-font signup-form-title"
          >
            Sign In To
            <br /> Double Down
          </span>
          <div className="signup-form-group-div">
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
            <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  className="signup-form-control"
                  placeholder="Your password"
                />
                <img
                  onClick={handleTogglePasswordVisibility}
                  style={{
                    width: "30px",
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    right: "10px",
                    cursor: "pointer",
                  }}
                  src={hidePassword}
                  alt=""
                />
              </div>
          </div>
          </div>
          <Link className="signup-forgot-password"
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
          <div className="signup-haveaccount"
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
