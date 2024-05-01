import React from "react";
import { bottomHeart, bottomSpade } from "../../common/assets/images";
const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
          backgroundColor: "#000",
          height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: '100%'
        }}
      >
        <span
          style={{
            fontWeight: 300 /* Light font weight */,
            fontStyle: "italic" /* Italic style */,
            fontSize: "16px",
            color: "#E7B960",
          }}
          className="cormorant-font"
        >
          ©doubledowncasinoevents.com
        </span>
        <span
          style={{
            fontWeight: 300 /* Light font weight */,
            fontStyle: "italic" /* Italic style */,
            fontSize: "16px",
            color: "#E7B960",
          }}
          className="cormorant-font"
        >
          By MdX
        </span>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          margin: "auto",
          width: "32%",
        }}
      >
        <img
          src={bottomSpade}
          style={{
            transform: " rotate(162.11deg)",
            zIndex: 2,
            position: "absolute",
            left: "0%",
            width: "16rem",
            bottom: "-150px",
          }}
          alt=""
        />
        <img
          src={bottomHeart}
          style={{
            transform: " rotate(0.11deg)",
            zIndex: 1,
            position: "absolute",
            right: "0%",
            width: "16rem",
            bottom: "-150px",
          }}
          alt=""
        />
      </div>
    </div>
  );
};

export default Footer;
