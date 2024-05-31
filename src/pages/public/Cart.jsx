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
        <span
          className="main-cart-heading cormorant-font gradient-text">
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
            className="main-cart-back cormorant-font"
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
                flexDirection: "column",
                gap: "30px",
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
                  }}className="main-cart-table-heading"
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
                  <span className="main-cart-table-heading">Price/h</span>
                  <span className="main-cart-table-heading">Total</span>
                  <span style={{ width: "40px" }}> </span>
                </div>
              </div>
              <hr className="main-cart-t-hr"
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
                          <img className="main-cart-img"
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
                          <span className="main-cart-title">
                            {items.title}
                          </span>
                          <span className="main-cart-category" style={{ color: "#919385" }}>
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
                      <span className="gordita-font main-cart-pt" style={{ color: "#FFF" }}>
                        ${items.price}
                      </span>
                      <span className="gordita-font main-cart-pt" style={{ color: "#FFF" }}>
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
                        <img className="main-cart-delIcon" 
                          src={deleteIcon}
                          alt=""
                          onClick={() => removeItem(index)}
                        />
                      </div>
                    </div>
                  </div>
                  <hr className="main-cart-b-hr"
                  />
                </div>
              ))}
            </div>
            <div
              style={{
                display: "flex",
                width: "60%",
              }}
            >
              <div className="main-cart-total"
              >
                <div className="main-cart-total-div" 
                >
                  <span
                    className="cormorant-font main-cart-total-heading"
                  >
                    Total
                  </span>
                  <div 
                    className="gordita-font main-cart-total-subdiv"
                  >
                    <span>Taxes</span>
                    <span style={{ color: "#fff" }}>$11</span>
                  </div>
                  <div 
                    className="gordita-font main-cart-total-subdiv"
                  >
                    <span>Total</span>
                    <span style={{ color: "#fff" }}>$281</span>
                  </div>
                </div>
                <button onClick={handleCheckout} className="main-cart-checkout-btn">
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
