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
              zIndex: 3,
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
              zIndex: 2,
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
              zIndex: 2,
            }}
          />
        </div>
      </Link>
      <img
        src={hamburger}
        alt="logo"
        className="hamburger"
        onClick={toggleMenu}
      />
      <Link to={"/sign-up"}>
        <button 
          className="nav-sign-up cormorant-font"
        >
          SIGN UP
        </button>
      </Link>
      <div className="nav-cart-btn"
      >
        <img src={shoppingCart} alt="logo" onClick={toggleCart} />
        {cartItems.length !== 0 && (
          <span className="nav-cart-badge"
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
