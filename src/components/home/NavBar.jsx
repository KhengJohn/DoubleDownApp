import React from "react";
import {
  xIcon,
  fbIcon,
  igIcon,
  cloverShape,
  close,
} from "../../common/assets/images";
import { Link } from "react-router-dom";

const NavBar = ({ toggleMenu, menu }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: menu ? "0" : "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
        display: menu ? "block" : "hidden",
        transition: "transform 3s ease",
        transform: !menu ? "translateY(0)" : "translateY(-100%)",
        zIndex: 40,
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
        onClick={toggleMenu}
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
      <img
        src={cloverShape}
        alt="cloverShape"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "50%",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          margin: "50px",
          height: "100vh",
        }}
      >
        <ul
          style={{
            background:
              "linear-gradient(to right, #EFCE76 0%, #835A27 38%, #C09852 73%, #F4E285 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "flex",
            flexDirection: "column",
            alignItems: "self-start",
            justifyContent: "flex-start",
            fontSize: "40px",
            listStyle: "none",
            gap: "30px",
            marginLeft: 0,
            paddingLeft: 0,
          }}
          className="cormorant-font"
        >
         <Link style={{ cursor: 'pointer'}} to={"/contact-us"}><li className="gradient-text">CONTACT US</li></Link>
         <Link style={{ cursor: 'pointer'}} to={"/products"}><li className="gradient-text" style={{ cursor: 'pointer'}}>GAMING TABLES</li></Link>
        </ul>
        <div style={{ display: "flex", flexDirection: "row", gap: "30px" }}>
          <img
            src={xIcon}
            alt="xIcon"
            style={{ cursor: "pointer", width: "50px" }}
          />
          <img
            src={fbIcon}
            alt="fbIcon"
            style={{ cursor: "pointer", width: "50px" }}
          />
          <img
            src={igIcon}
            alt="igIcon"
            style={{ cursor: "pointer", width: "50px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
