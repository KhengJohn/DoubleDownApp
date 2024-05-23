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
    >              <Link to={"/"}>
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
      <div
        className="glass-bg"
        style={{ height: requestSent ? "80%" : "100%" }}
      >
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
            {requestSent ? "Request Sent." : "Forgot password?"}
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
