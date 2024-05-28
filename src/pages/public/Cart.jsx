import React from "react";
import {
  rightImage,
  leftImage,
  logoT,
  backArrow,
  deleteIcon,
} from "../../common/assets/images";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../../state/actions";
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/cart/checkout");
  };
  const removeItem = (index) => {
    dispatch(removeFromCart(index)); // Dispatch action to remove item from cart
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
          Cart Order
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
              <div
                style={{ display: "flex", width: "100%", color: "#D1A757" }}
                className="cormorant-font"
              >
                <span
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  Game
                </span>
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Price/h</span>
                  <span>Total</span>
                  <span style={{ width: "40px" }}> </span>
                </div>
              </div>
              <hr
                style={{
                  width: "100%",
                  marginLeft: 0,
                  border: "1px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #EFCE76 0%, #835A27 38%, #835A27 73%,#F4E285 100%) 1",
                  borderImageSlice: "1",
                  borderImageRepeat: "stretch",
                }}
              />
              {cartItems.map((items, index) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                  className="cormorant-font"
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      color: "#D1A757",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          width: "100%",
                          flexDirection: "row",
                          gap: "10px",
                        }}
                      >
                        <div
                          style={{
                            border: "1px solid transparent",
                            borderImage:
                              "linear-gradient(to right, #EFCE76 0%, #835A27 38%, #835A27 73%,#F4E285 100%) 1",
                            borderImageSlice: "1",
                            borderImageRepeat: "stretch",
                            padding: "5px",
                          }}
                        >
                          <img
                            style={{ width: "90px", height: "90px" }}
                            src={items.img}
                            alt=""
                          />
                        </div>
                        <div
                          style={{
                            display: "flex",
                            width: "100%",
                            flexDirection: "column",
                            justifyContent: "center",
                            gap: "5px",
                          }}
                        >
                          <span style={{ fontSize: "18px" }}>
                            {items.title}
                          </span>
                          <span style={{ color: "#919385" }}>
                            {items.category}
                          </span>
                        </div>
                      </div>
                    </span>
                    <div
                      style={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <span className="gordita-font" style={{ color: "#FFF" }}>
                        ${items.price}
                      </span>
                      <span className="gordita-font" style={{ color: "#FFF" }}>
                        ${items.price * items.count}
                      </span>
                      <div
                        style={{
                          border: "1px solid #676052",
                          backgroundColor: "#393830",
                          color: "#FFF",
                          padding: "3px 06px",
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                        }}
                      >
                        <img
                          style={{ width: "15px" }}
                          src={deleteIcon}
                          alt=""
                          onClick={() => removeItem(index)}
                        />
                      </div>
                    </div>
                  </div>
                  <hr
                    style={{
                      width: "100%",
                      marginTop: "20px",
                      border: "1px solid transparent",
                      borderImage:
                        "linear-gradient(to right, #EFCE76 0%, #835A27 38%, #835A27 73%,#F4E285 100%) 1",
                      borderImageSlice: "1",
                      borderImageRepeat: "stretch",
                    }}
                  />
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  padding: "20px",
                  width: "100%",
                  height: "min-content",
                  marginTop: "15px",
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
                    <span>Total</span>
                    <span style={{ color: "#fff" }}>$281</span>
                  </div>
                </div>
                <button onClick={handleCheckout} className="signup-btn">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
