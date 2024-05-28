import React, {useEffect} from "react";
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
import { SliderData } from "../../common/dummydata/DummyData"; 
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addToCart, showAlert } from "../../state/actions";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartItems);
  const showAlertFlag = useSelector(state => state.showAlert);
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
        <Link to={"/"} style={{ zIndex: 3 }}>
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
            />{" "}
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
            <img
              src={spLightEffect}
              style={{
                width: "400px",
                position: "absolute",
                zIndex: 2,
                top: "0",
              }}
              alt=""
            />
            <img
              className="floating-img"
              src={newData.img}
              style={{ width: "300px" }}
              alt=""
            />
            <img
              className=""
              src={slideBase}
              style={{ width: "350px" }}
              alt=""
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "start",
              zIndex: 2,
            }}
          >
            <div
              style={{
                display: "flex",
                width: "70%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                gap: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "50px",
                  fontWeight: 600,
                  fontStyle: "italic",
                  color: "#e7b960",
                }}
                className="cormorant-font"
              >
                {newData.title}
              </span>
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: 500,
                  fontStyle: "italic",
                  color: "#e7b960",
                }}
                className="cormorant-font gradient-text"
              >
                {newData.price}$
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    fontStyle: "italic",
                    color: "#e7b960",
                  }}
                  className="cormorant-font gradient-text"
                >
                  /h
                </span>
              </span>
              <span
                className="gordita-font"
                style={{ color: "#fff", fontSize: "12px" }}
              >
                {newData.description}
              </span>
              <hr
                style={{
                  width: "80%",
                  marginLeft: 0,
                  border: "1px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #EBD57C 0%, #875E2A 56%, #B79751 100%) 1",
                  borderImageSlice: "1",
                  borderImageRepeat: "stretch",
                }}
              />
              <button
                style={{
                  border: "1px solid transparent",
                  borderImage:
                    "linear-gradient(to right, #E7B960 0%, #000 49%, #E7B960 100%) 1",
                  borderImageSlice: "1",
                  borderImageRepeat: "stretch",
                  backgroundColor: "initial",
                  color: "#E7B960",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  gap: "8px",
                  padding: "10px 25px",
                  width: "80%",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
                className="cormorant-font"
                onClick={handleAddToCart}
              >
                Request Now
              </button>
              <span
                className="gordita-font"
                style={{
                  display: "flex",
                  alignItems: "start",
                  gap: "5px",
                  width: "80%",
                  color: "#FFF",
                  fontSize: "10px",
                  lineHeight: "150%",
                }}
              >
                <img style={{ width: "18px" }} src={infoIcon} alt="" />
                Prices shown above include professional casino dealer for up to
                3 hours of gaming. Delivery and taxes not included. Rates vary
                on holidays and the month of December.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          padding: "40px 60px",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
        }}
      >
        <span
          className="cormorant-font"
          style={{
            fontSize: "35px",
            fontWeight: 500,
            fontStyle: "italic",
            color: "#D1A757",
          }}
        >
          Keep exploring
        </span>
        <ProductCards SliderData={SliderData} />
      </div>
    </div>
  );
};

export default SingleProduct;