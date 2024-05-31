import React from "react";
import {
  rightImage,
  leftImage,
  logoT,
  backArrow,
  warningIcon,
  cardInputIcon,
} from "../../common/assets/images";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const handlePay = () => {
    navigate("/cart/success");
  };
  return (
    <div className="black-bg-padding">
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
      <div className="main-cart-container">
        <span className="main-cart-heading cormorant-font gradient-text">
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
          <span className="main-cart-back cormorant-font">
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
                <div className="checkout-content-container">
                  <span className="cormorant-font checkout-for-title">
                    Personal Information
                  </span>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div className="checkout-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="checkout-form-label"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        className="checkout-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                    <div className="checkout-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="checkout-form-label"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="checkout-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div className="checkout-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="checkout-form-label"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        className="checkout-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                    <div className="checkout-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="checkout-form-label"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="checkout-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                  </div>
                </div>
                <div className="checkout-content-container">
                  <span className="cormorant-font checkout-for-title">
                    Delivery Details
                  </span>
                  <div style={{ display: "flex", gap: "20px" }}>
                    <div className="checkout-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="checkout-form-label"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        className="checkout-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                    <div className="checkout-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="checkout-form-label"
                      >
                        Postcode
                      </label>
                      <input
                        type="text"
                        className="checkout-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                  </div>

                  <div className="checkout-form-group">
                    <label
                      for="exampleInputEmail1"
                      className="checkout-form-label"
                    >
                      Street Adress
                    </label>
                    <input
                      type="tel"
                      className="checkout-form-control"
                      aria-describedby="nameHelp"
                    />
                  </div>
                  <div className="checkout-form-group">
                    <label
                      for="exampleInputEmail1"
                      className="checkout-form-label"
                    >
                      Suburb
                    </label>
                    <input
                      type="email"
                      className="checkout-form-control"
                      aria-describedby="nameHelp"
                    />
                  </div>

                  <div style={{ display: "flex", gap: "20px" }}>
                    <div className="checkout-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="checkout-form-label"
                      >
                        Date
                      </label>
                      <input
                        type="tel"
                        className="checkout-form-control"
                        aria-describedby="nameHelp"
                      />
                    </div>
                    <div className="checkout-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="checkout-form-label"
                      >
                        Time
                      </label>
                      <input
                        type="email"
                        className="checkout-form-control"
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
                width: "55%",
              }}
            >
              <div className="main-checkout-total">
                <div className="main-checkout-total-div">
                  <span className="cormorant-font main-cart-total-heading">
                    Total
                  </span>
                  <div className="gordita-font main-checkout-total-subdiv">
                    <span>Taxes</span>
                    <span style={{ color: "#fff" }}>$11</span>
                  </div>
                  <div className="gordita-font main-checkout-total-subdiv">
                    <span>Delivery</span>
                    <span style={{ color: "#fff" }}>$50</span>
                  </div>
                  <div className="gordita-font main-checkout-total-subdiv">
                    <span>Sub-total</span>
                    <span style={{ color: "#fff" }}>$211</span>
                  </div>
                  <span className="gordita-font checkout-info">
                    <img style={{ width: "18px" }} src={warningIcon} alt="" />
                    50$ will be added for 1 Set delivery service (with 3 set in
                    the cart the delivery will be free).
                  </span>
                </div>
                <div className="main-checkout-total-div">
                  <span className="cormorant-font main-cart-total-heading">
                    Card Details
                  </span>
                  <div className="checkout-form-group">
                    <label
                      for="exampleInputEmail1"
                      className="checkout-form-label"
                    >
                      Card Number
                    </label>

                    <div style={{ position: "relative" }}>
                      <input
                        type="text"
                        className="checkout-form-control"
                        aria-describedby="nameHelp"
                        placeholder="1234 5678 9123 4567"
                      />
                      <img
                        style={{
                          width: "30px",
                          position: "absolute",
                          top: "50%",
                          transform: "translateY(-50%)",
                          right: "10px",
                          cursor: "pointer",
                        }}
                        src={cardInputIcon}
                        alt=""
                      />
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "20px" }}>
                    <div className="checkout-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="checkout-form-label"
                      >
                        Expiry Date
                      </label>
                      <input
                        type="tel"
                        className="checkout-form-control"
                        aria-describedby="nameHelp"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="checkout-form-group">
                      <label
                        for="exampleInputEmail1"
                        className="checkout-form-label"
                      >
                        Card Code
                      </label>
                      <input
                        type="email"
                        className="checkout-form-control"
                        aria-describedby="nameHelp"
                        placeholder="CVC"
                      />
                    </div>
                  </div>
                  <span className="gordita-font checkout-infoII">
                    Your personal data will be used to process your order,
                    support your experience throughout this website, and for
                    other purposes described in our privacy policy.
                  </span>
                </div>
                <button onClick={handlePay} className="main-cart-checkout-btn">
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
