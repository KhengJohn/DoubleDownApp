import React from "react";
import {
  xIcon,
  fbIcon,
  igIcon,
  cloverShape,
  close,
} from "../../common/assets/images";
const NavBar = ({ toggleMenu, menu }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: menu ? "0" : "100vh",
        overflow: "hidden",
        backgroundColor: "#000",
        display: menu ? "block" : "hidden",
        transition: "transform 3s ease",
        transform: !menu ? "translateY(0)" : "translateY(-100%)",
        zIndex: 10,
      }}
    >
      <img
        src={close}
        alt="close"
        style={{
          position: "absolute",
          top: "22px",
          right: "5%",
          cursor: "pointer",
          width: "30px",
        }}
        onClick={toggleMenu}
      />
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
          }} className="cormorant-font"
        >
          <li>CONTACT US</li>
          <li>GAMING TABLES</li>
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
