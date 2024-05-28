import React, { useState } from "react";
import {
  rightImage,
  leftImage,
  logoT,
  hamburger,
  shoppingCart,
} from "../../common/assets/images";
import { Link } from "react-router-dom";
import NavBar from "../home/NavBar";
import SideCart from "../cart/SideCart";
import { useSelector } from "react-redux";
const NavBarWrapper = ({ children }) => {
  const [menu, setMenue] = useState(true);
  const [cart, setCart] = useState(true);
  const cartItems = useSelector((state) => state.cartItems);
  const toggleMenu = () => {
    setMenue(!menu);
  };
  const toggleCart = () => {
    setCart(!cart);
  };
  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <NavBar toggleMenu={toggleMenu} menu={menu} />
      <SideCart toggleCart={toggleCart} cart={cart} />
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
      <img
        src={hamburger}
        alt="logo"
        style={{
          position: "absolute",
          top: "28px",
          right: "5%",
          width: "50px",
          zIndex: 10,
          cursor: "pointer",
          ":hover": {
            cursor: "pointer",
          },
        }}
        onClick={toggleMenu}
      />
      <Link to={"/sign-up"}>
        <button
          style={{
            position: "absolute",
            top: "12px",
            right: "18%",
            border: "1px solid transparent",
            borderImage:
              "linear-gradient(to right, #BE9F60 0%, #000 49%, #BE9F60 100%) 1",
            borderImageSlice: "1",
            borderImageRepeat: "stretch",
            backgroundColor: "initial",
            color: "#E7B960",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            gap: "8px",
            padding: "05px 20px",
            cursor: "pointer",
            zIndex: 10,
            marginTop: "10px",
            opacity: 1,
          }}
          className="cormorant-font"
        >
          SIGN UP
        </button>
      </Link>
      <div
        style={{
          position: "absolute",
          top: "12px",
          right: "12%",
          cursor: "pointer",
          zIndex: 10,
          opacity: 1,
          ":hover": {
            cursor: "pointer",
          },
        }}
      >
        <img src={shoppingCart} alt="logo" onClick={toggleCart} />
        {cartItems.length !== 0 && (
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "100%",
              background: "#B32323",
              color: "#FFF",
              fontSize: "7px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 2,
              right: 0,
              fontWeight: "bold",
            }}
          >
            {cartItems.length}
          </span>
        )}
      </div>
      <div style={{ margin: "0px auto 0 auto" }}>{children}</div>
    </div>
  );
};

export default NavBarWrapper;
