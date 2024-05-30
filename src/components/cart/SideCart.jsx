import React, { useState } from "react";
import {
  close,
  plus,
  deleteIcon,
  less,
  addtocarticon,
} from "../../common/assets/images";
import { ExploreData } from "../../common/dummydata/DummyData";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../state/actions";

const SideCart = ({ toggleCart, cart }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState({});
  const cartItems = useSelector((state) => state.cartItems);
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/cart");
  };
  // Function to increment the count for a specific item
  const increment = (itemId) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  };

  // Function to decrement the count for a specific item
  const decrement = (itemId) => {
    setCount((prevCounts) => ({
      ...prevCounts,
      [itemId]: Math.max((prevCounts[itemId] || 0) - 1, 0),
    }));
  };
  const removeItem = (index) => {
    dispatch(removeFromCart(index)); // Dispatch action to remove item from cart
  };
  // Function to calculate the total price for each item
  const calculateItemTotal = (item) => {
    return item.price * (count[item.id] || 1);
  };

  // Function to calculate the subtotal of all items in the cart
  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += calculateItemTotal(item);
    });
    return subtotal.toFixed(2); // Round to two decimal places
  };

  return (
    <div
      className={`side-cart ${cart ? "show": "hide"}`}
    >
      <div className="side-cart-close" onClick={toggleCart}>
        <img src={close} alt="close" />
      </div>
      <div className="side-cart-container">
        <span className="side-cart-heading cormorant-font gradient-text">
          My Cart
        </span>
        {/* CONTENT */}
        {cartItems.length === 0 ? (
          <div className="side-cart-content-div noScrollBar">
            <span className="side-cart-content-title cormorant-font">
              Looks like you haven’t added anything yet, let’s get you started!
            </span>
            <div className="cormorant-font side-cart-cs-btn">
              CONTINUE SHOPPING
            </div>
            <div className="side-cart-more-container">
              <span className="cormorant-font side-cart-more-title">
                More rented
              </span>
              <div className="side-cart-div-container"
              >
                {ExploreData.map((items, index) => (
                  <div key={index} className="side-cart-more-div">
                    <div className="side-cart-more-innnerdiv">
                      <img
                        className="side-cart-more-img"
                        src={items.img}
                        alt=""
                      />
                    </div>
                    <hr className="side-cart-more-hr" />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "20px",
                        alignItems: "start",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "5px",
                        }}
                      >
                        <span className="cormorant-font side-cart-more-innnerdivII-title">
                          {items.title}
                        </span>
                        <span
                          style={{ color: "#FFF" }}
                          className="gordita-font side-cart-more-innnerdivII-subtitle"
                        >
                          ${items.price}
                        </span>
                      </div>
                      <img
                        className="side-cart-more-innnerdivII-btn"
                        src={addtocarticon}
                        alt=""
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="side-cart-content-div noScrollBar">
            {cartItems.map((items, index) => (
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", gap: "30px" }}>
                  <div className="side-cart-div">
                    <img src={items.img} alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <span className="side-cart-div-title">
                      {items.title ? items.title : "N/A"}
                    </span>
                    <span className="side-cart-div-subtitleI">
                      {items.category ? items.category : "N/A"}
                    </span>
                    <span className="side-cart-div-subtitleII">
                      PRICE/h:{" "}
                      <span className="side-cart-div-subtitleIII">
                        ${items.price ? items.price : "N/A"}
                      </span>
                    </span>
                    <span className="side-cart-div-subtitleII">
                      TIME:{" "}
                      <span className="side-cart-div-subtitleIII">
                        03 Hours
                      </span>
                    </span>
                    <span className="side-cart-div-subtitleII">
                      TOTAL:{" "}
                      <span className="side-cart-div-subtitleIII">
                        ${" "}
                        {items.price
                          ? items.price * (count[items.id] || 1)
                          : "N/A"}
                      </span>
                    </span>
                    <div className="side-cart-div-ID-del">
                      <div className="side-cart-div-ID-btn">
                        <img
                          src={less}
                          alt=""
                          onClick={() => decrement(items.id)}
                        />{" "}
                        {count[items.id] || 1}
                        <img
                          src={plus}
                          alt=""
                          onClick={() => increment(items.id)}
                        />
                      </div>
                      <div>
                        <img
                          className="side-cart-div-del-btn"
                          src={deleteIcon}
                          alt=""
                          onClick={() => removeItem(index)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="side-cart-more-hr" />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="side-cart-fixed-bottom">
        <div className="side-cart-fixed-bottom-inner">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span className="cormorant-font side-cart-fixed-bottom-inner-subtotal">
              Subtotal
            </span>
            <span className="gordita-font side-cart-fixed-bottom-inner-total">
              ${calculateSubtotal()}
            </span>
          </div>
          <button
            className="side-cart-fixed-bottom-inner-btn"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
