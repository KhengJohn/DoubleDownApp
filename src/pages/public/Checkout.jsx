import React from "react";
import {
  rightImage,
  leftImage,
  logoT,
  backArrow,
  warningIcon,
} from "../../common/assets/images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const handlePay = () => {
    navigate("/cart/success");
  };
  return (
    <div
      style={{
        position: "relative",
        padding: "100px 50px",
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
          Checkout
        </span>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <span
            className="cormorant-font"
            style={{
              fontSize: "",
              color: "#958D80",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              justifySelf: "start",
            }}
          >
            <img src={backArrow} alt="" /> Back to Shop
          </span>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "50px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <span
                    style={{ fontSize: "18px", color: "#D1A757" }}
                    className="cormorant-font"
                  >
                    Personal Information
                  </span>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div className="signup-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="signup-form-label"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="signup-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                    <div className="signup-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="signup-form-label"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="signup-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div className="signup-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="signup-form-label"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="signup-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                    <div className="signup-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="signup-form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="signup-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <span
                    style={{ fontSize: "18px", color: "#D1A757" }}
                    className="cormorant-font"
                  >
                    Delivery Details
                  </span>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div className="signup-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="signup-form-label"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        className="signup-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                    <div className="signup-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="signup-form-label"
                      >
                        Postcode
                      </label>
                      <input
                        type="text"
                        className="signup-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                  </div>

                  <div className="signup-form-group">
                    <label
                      for="exampleInputEmail1"
                      className="signup-form-label"
                    >
                      Street Adress
                    </label>
                    <input
                      type="tel"
                      className="signup-form-control"
                      aria-describedby="nameHelp"
                    />
                  </div>
                  <div className="signup-form-group">
                    <label
                      for="exampleInputEmail1"
                      className="signup-form-label"
                    >
                      Suburb
                    </label>
                    <input
                      type="email"
                      className="signup-form-control"
                      aria-describedby="nameHelp"
                    />
                  </div>

                  <div style={{ display: "flex", gap: "20px" }}>
                    <div className="signup-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="signup-form-label"
                      >
                        Date
                      </label>
                      <input
                        type="tel"
                        className="signup-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                    <div className="signup-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="signup-form-label"
                      >
                        Time
                      </label>
                      <input
                        type="email"
                        className="signup-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div
              style={{
                display: "flex",
                width: "70%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  padding: "20px",
                  width: "100%",
                  height: "min-content",
                  gap: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    border: "1px solid transparent",
                    borderImage:
                      "linear-gradient(to right, #EFCE76 0%, #835A27 38%, #835A27 73%,#F4E285 100%) 1",
                    borderImageSlice: "1",
                    borderImageRepeat: "stretch",
                    padding: "20px",
                    gap: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{ fontSize: "22px", color: "#D1A757" }}
                    className="cormorant-font"
                  >
                    Total
                  </span>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#9F9694",
                    }}
                    className="gordita-font"
                  >
                    <span>Taxes</span>
                    <span style={{ color: "#fff" }}>$11</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#9F9694",
                    }}
                    className="gordita-font"
                  >
                    <span>Delivery</span>
                    <span style={{ color: "#fff" }}>$50</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#9F9694",
                    }}
                    className="gordita-font"
                  >
                    <span>Sub-total</span>
                    <span style={{ color: "#fff" }}>$211</span>
                  </div>
                  <span
                    className="gordita-font"
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: "8px",
                      color: "#FFF",
                      fontSize: "09px",
                      lineHeight: "150%",
                      backgroundColor: "rgba(231, 185, 96, 0.27)",
                      padding: "10px",
                    }}
                  >
                    <img style={{ width: "18px" }} src={warningIcon} alt="" />
                    50$ will be added for 1 Set delivery service (with 3 set in
                    the cart the delivery will be free).
                  </span>
                </div>
                <div
                  style={{
                    border: "1px solid transparent",
                    borderImage:
                      "linear-gradient(to right, #EFCE76 0%, #835A27 38%, #835A27 73%,#F4E285 100%) 1",
                    borderImageSlice: "1",
                    borderImageRepeat: "stretch",
                    padding: "20px",
                    gap: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{ fontSize: "22px", color: "#D1A757" }}
                    className="cormorant-font"
                  >
                    Card Details
                  </span>
                  <div className="signup-form-group">
                    <label
                      for="exampleInputEmail1"
                      className="signup-form-label"
                    >
                      Card Number
                    </label>
                    <input
                      type="email"
                      className="signup-form-control"
                      aria-describedby="nameHelp"
                      placeholder="1234 5678 9123 4567"
                    />
                  </div>

                  <div style={{ display: "flex", gap: "20px" }}>
                    <div className="signup-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="signup-form-label"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="tel"
                        className="signup-form-control"
                        aria-describedby="nameHelp"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="signup-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="signup-form-label"
                      >
                        Card Code
                      </label>
                      <input
                        type="email"
                        className="signup-form-control"
                        aria-describedby="nameHelp"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                  <span
                    className="gordita-font"
                    style={{
                      display: "flex",
                      alignItems: "start",
                      gap: "8px",
                      color: "#9F9694",
                      fontSize: "09px",
                      lineHeight: "150%",
                      padding: "10px",
                    }}
                  >
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </span>
                </div>
                <button onClick={handlePay} className="signup-btn">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
