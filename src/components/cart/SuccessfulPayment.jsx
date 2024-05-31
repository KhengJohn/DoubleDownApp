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
        height: '100vh'
        }}
      >
        <span className="main-cart-heading cormorant-font gradient-text"
        >
          thank you for
          <br />
          your rental
        </span>
        <img src={success} alt="" className=".success-img"/>
        <span 
          className="gordita-font checkout-infoII"
        >
          Your rental has been placed.
        </span>
        <div style={{ width: "20%" }}>
          <button
            style={{ width: "100%" }}
            onClick={handlePay}
            className="main-cart-checkout-btn"
          >
            Keep Exploring
          </button>
        </div>
      </div>
    </div>
  );
};
export default SuccessfulPayment;
