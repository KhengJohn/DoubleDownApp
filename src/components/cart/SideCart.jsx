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
      style={{
        position: "fixed",
        top: 0,
        width: "50%",
        height: cart ? "0" : "100vh",
        overflow: "hidden",
        display: cart ? "block" : "hidden",
        transition: "transform 3s ease",
        transform: !cart ? "translateX(100%)" : "translateX(200%)",
        zIndex: 40,
        backgroundColor: "#3C3529",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "22px",
          right: "5%",
          cursor: "pointer",
          height: "30px",
          width: "30px",
          display: "flex",
          zIndex: 40,
        }}
        onClick={toggleCart}
      >
        <img
          src={close}
          alt="close"
          style={{
            width: "30px",
            margin: "auto",
          }}
        />
      </div>
      <div style={{ padding: "22px 60px" }}>
        <span
          className="cormorant-font gradient-text"
          style={{
            fontSize: "30px",
            fontWeight: 500,
            fontStyle: "italic",
            color: "#D1A757",
          }}
        >
          My Cart
        </span>
        {/* CONTENT */}
        {cartItems.length === 0 ? (
          <div
            style={{
              padding: "60px 0 0 0",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              height: "49vh",
              overflowY: "scroll",
            }}
            className="noScrollBar"
          >
            <span
              style={{ color: "#919385", fontSize: "20px" }}
              className="cormorant-font"
            >
              Looks like you haven’t added anything yet, let’s get you started!
            </span>
            <button
              className="cormorant-font cart-cs-btn"
              style={{ width: "max-content" }}
            >
              CONTINUE SHOPPING
            </button>
            <div
              style={{
                //   padding: "40px 60px",
                display: "flex",
                flexDirection: "column",
                gap: "25px",
              }}
            >
              <span
                className="cormorant-font"
                style={{
                  fontSize: "28px",
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "#D1A757",
                }}
              >
                More rented
              </span>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  rowGap: "40px",
                }}
              >
                {ExploreData.map((items, index) => (
                  <div
                    key={index}
                    style={{
                      border: "1px solid transparent",
                      borderImage:
                        "linear-gradient(to right, #EFCE76 0%, #835A27 38%, #835A27 73%,#F4E285 100%) 1",
                      borderImageSlice: "1",
                      borderImageRepeat: "stretch",
                      backgroundColor: "initial",
                      color: "#E7B960",
                      display: "flex",
                      flexDirection: "column",
                      width: "calc(53% - 20px)",
                    }}
                  >
                    <div
                      style={{
                        padding: "20px 5px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        style={{ width: "140px", height: "140px" }}
                        src={items.img}
                        alt=""
                      />
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
                        <span
                          style={{ fontSize: "18px" }}
                          className="cormorant-font"
                        >
                          {items.title}
                        </span>
                        <span
                          style={{ color: "#FFF" }}
                          className="gordita-font"
                        >
                          ${items.price}
                        </span>
                      </div>
                      <img
                        style={{ width: "30px", cursor: "pointer" }}
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
          <div
            style={{
              padding: "60px 0 0 0",
              display: "flex",
              flexDirection: "column",
              gap: "50px",
              height: "49vh",
              overflowY: "scroll",
            }}
            className="noScrollBar"
          >
            {cartItems.map((items, index) => (
              <div
                style={{
                  display: "flex",
                  gap: "30px",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", gap: "30px" }}>
                  <div
                    style={{
                      border: "1px solid transparent",
                      borderImage:
                        "linear-gradient(to right, #EFCE76 0%, #835A27 38%, #835A27 73%,#F4E285 100%) 1",
                      borderImageSlice: "1",
                      borderImageRepeat: "stretch",
                      backgroundColor: "#393830",
                      color: "#E7B960",
                      display: "flex",
                      flexDirection: "column",
                      width: "150px",
                    }}
                  >
                    {" "}
                    <img src={items.img} alt="" />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <span style={{ color: "#D1A757", fontSize: "20px" }}>
                    {items.title ? items.title : "N/A"}
                    </span>
                    <span style={{ color: "#919385", fontSize: "12px" }}>
                    {items.category ? items.category : "N/A"}
                    </span>
                    <span style={{ color: "#919385", fontSize: "12px" }}>
                      PRICE/h:{" "}
                      <span style={{ color: "#fff", fontSize: "12px" }}>
                      ${items.price ? items.price : "N/A"}
                      </span>
                    </span>
                    <span style={{ color: "#919385", fontSize: "12px" }}>
                      TIME:{" "}
                      <span style={{ color: "#fff", fontSize: "12px" }}>
                        03 Hours
                      </span>
                    </span>
                    <span style={{ color: "#919385", fontSize: "12px" }}>
                      TOTAL:{" "}
                      <span style={{ color: "#fff", fontSize: "12px" }}>
                      $   {items.price ? items.price * (count[items.id] || 1) : "N/A"}
                      </span>
                    </span>
                    <div
                      style={{
                        display: "flex",
                        gap: "20px",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          border: "1px solid #676052",
                          backgroundColor: "#393830",
                          color: "#FFF",
                          padding: "3px 10px",
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <img
                          style={{ cursor: "pointer" }}
                          src={less}
                          alt=""
                          onClick={() => decrement(items.id)}
                        />{" "}
                        {count[items.id] || 1}
                        <img
                          style={{ cursor: "pointer" }}
                          src={plus}
                          alt=""
                          onClick={() => increment(items.id)}
                        />
                      </div>
                      <div>
                        <img
                          style={{ cursor: "pointer", width: "20px" }}
                          src={deleteIcon}
                          alt=""
                          onClick={() => removeItem(index)}
                        />
                      </div>
                    </div>
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
              </div>
            ))}
          </div>
        )}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "5%",
          width: "100%",
          padding: "40px 60px 0 60px",
          borderTop: "1px solid transparent",
          borderImage:
            "linear-gradient(to right, #EFCE76 0%, #835A27 38%, #835A27 73%,#F4E285 100%) 1",
          borderImageSlice: "1",
          borderImageRepeat: "stretch",
          backgroundColor: "#3C3529",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "79%",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span style={{ color: "#D1A757", fontSize: "16px" }}>Subtotal</span>
            <span style={{ color: "#fff", fontSize: "16px" }}>${calculateSubtotal()}</span>
          </div>
          <button className="signup-btn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideCart;
