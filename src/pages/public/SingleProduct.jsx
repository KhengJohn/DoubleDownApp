import React, { useEffect, useState } from "react";
import {
  signupBg,
  slideBase,
  rightImage,
  leftImage,
  logoT,
  infoIcon,
  spLightEffect,
} from "../../common/assets/images";
import { Link } from "react-router-dom";
import ProductCards from "../../common/dummydata/ProductCards";
import { SliderData, ExploreData } from "../../common/dummydata/DummyData";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, showAlert } from "../../state/actions";

const SingleProduct = () => {
  const [visible, setVisible] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);
  const showAlertFlag = useSelector((state) => state.showAlert);
  const { id } = useParams();
  const newData = SliderData[id];
  useEffect(() => {
    if (showAlertFlag) {
      alert("This item is already in the cart!");
      // Dispatch an action to hide the alert after showing it
      dispatch(showAlert());
    }
  }, [showAlertFlag, dispatch]);
  const handleAddToCart = () => {
    dispatch(addToCart(newData)); // Dispatch the addToCart action with the item
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, 50);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
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
      >
        <div className="glass-overlay-bg"></div>
        <div style={{ display: "flex", width: "100%" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              zIndex: 2,
              alignItems: "center",
            }}
          >
            <img src={spLightEffect} className="light-effect" alt="" />
            <img
              className="floating-img single-product-img"
              src={newData.img}
              alt=""
            />
            <img className="single-product-img-base" src={slideBase} alt="" />
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "start",
              zIndex: 2,
            }}
          >
            <div className="single-product-text-container">
              <span className="single-product-text-title cormorant-font">
                {newData.title}
              </span>
              <span className="single-product-text-price cormorant-font gradient-text">
                {newData.price}$
                <span className="single-product-text-price-sub cormorant-font gradient-text">
                  /h
                </span>
              </span>
              <span className="single-product-text-description gordita-font">
                {newData.description}
              </span>
              <hr className="single-product-text-hr" />
              <button
                className="single-product-text-btn cormorant-font"
                onClick={handleAddToCart}
              >
                Request Now
              </button>
              <span className="gordita-font single-product-text-info">
                <img style={{ width: "18px" }} src={infoIcon} alt="" />
                Prices shown above include professional casino dealer for up to
                3 hours of gaming. Delivery and taxes not included. Rates vary
                on holidays and the month of December.
              </span>
            </div>
          </div>
        </div>
      </div>
      {visible && (
        <div
          style={{
            padding: "40px 60px",
            display: "flex",
            flexDirection: "column",
            gap: "25px",
          }}
        >
          <span className="cormorant-font single-product-explore">
            Keep exploring
          </span>
          <ProductCards SliderData={ExploreData} />
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
