import React from "react";
import {
  rightImage,
  leftImage,
  logoT,
  success,
} from "../../common/assets/images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SuccessfulPayment = () => {
  const navigate = useNavigate();
  const handlePay = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "100px",
      }}
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
          />
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
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
          width: "100%",
        }}
      >
        <span
          className="cormorant-font gradient-text"
          style={{
            fontSize: "45px",
            fontWeight: 600,
            textTransform: "uppercase",
            textAlign: "center",
            lineHeight: "89%",
            fontStyle: "italic",
          }}
        >
          thank you for
          <br />
          your rental
        </span>
        <img src={success} alt="" />
        <span
          style={{
            color: "#9F9694",
            fontSize: "10px",
          }}
          className="gordita-font"
        >
          Your rental has been placed.
        </span>
        <div style={{ width: "20%" }}>
          <button
            style={{ width: "100%" }}
            onClick={handlePay}
            className="signup-btn"
          >
            Keep Exploring
          </button>
        </div>
      </div>
    </div>
  );
};
export default SuccessfulPayment;
