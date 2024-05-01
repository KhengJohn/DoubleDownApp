import React from "react";
import { requestDice } from "../../common/assets/images";


const Contact = () => {
  return (
    <div
      style={{
        height: "100vh",
        gap: "30px",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: 'auto', backgroundColor: '#000'
      }}
    >
      <span
        style={{ fontSize: "100px", color: "#E7B960" }}
        className="cormorant-font"
      >
        CALL US TODAY !
      </span>
      <span
        style={{ fontSize: "50px", color: "#E7B960" }}
        className="cormorant-font"
      >
        +1 (512)-945-2363
      </span>
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
        }}
        className="cormorant-font"
      >
        REQUEST A QUOTE <img alt="request-dice" src={requestDice} />
      </button>
    </div>
  );
};

export default Contact;
