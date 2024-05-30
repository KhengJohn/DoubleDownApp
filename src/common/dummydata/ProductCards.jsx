import React, { useEffect } from "react";
import { addtocarticon } from "../assets/images";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, showAlert } from "../../state/actions";

const ProductCards = ({ SliderData }) => {
  const dispatch = useDispatch();
  const showAlertFlag = useSelector((state) => state.showAlert);
  useEffect(() => {
    if (showAlertFlag) {
      alert("This item is already in the cart!");
      // Dispatch an action to hide the alert after showing it
      dispatch(showAlert());
    }
  }, [showAlertFlag, dispatch]);
  const handleAddToCart = (index) => {
    dispatch(addToCart(SliderData[index])); // Dispatch the addToCart action with the item
  };
  return (
    <div className="product-div-container"
    >
      {SliderData.map((items, index) => (
        <div
          key={index}
          className="product-card-container"
        >
          <div
          className="product-card-inner-container"
          >
            <img
              src={items.img}
              alt=""
              className="product-card-img"
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
              <span className="product-card-title cormorant-font">
                {items.title}
              </span>
              <span className="product-card-subtitle gordita-font">
                ${items.price}
              </span>
            </div>
            <img
            className="product-add-btn gordita-font"
              src={addtocarticon}
              alt=""
              onClick={() => handleAddToCart(index)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
