import React from "react";
import {
  diamondCard,
  dice,
  coin,
  slideBase,
  heartsButton,
} from "../../common/assets/images";

const Products = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        gap: "20px",
        height: "100vh",
        backgroundColor:'#000'
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <img src={diamondCard} style={{ width: "150px" }} alt="diamondCard" />
        <img src={slideBase} style={{ width: "250px" }} alt="diamondCard" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0px",
          }}
        >
          <span
            style={{
              fontWeight: 300 /* Light font weight */,
              fontStyle: "italic" /* Italic style */,
              fontSize: "26px",
              color: "#E7B960",
            }}
            className="cormorant-font"
          >
            Royal Flush
          </span>
          <span
            style={{
              fontWeight: 300 /* Light font weight */,
              fontStyle: "italic" /* Italic style */,
              fontSize: "20px",
              color: "#E7B960",
            }}
            className="cormorant-font"
          >
            $3895
          </span>
          <ul
            style={{
              fontStyle: "italic" /* Italic style */,
              fontSize: "14px",
              color: "#fff",
            }}
          >
            <li>8 Black Jack Tables</li>
            <li>2 Full Size Craps Tables</li>
            <li>2 Texas Hold'em Tables</li>
            <li>2 Roulette Tables</li>
          </ul>
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
            RENT NOW <img alt="heartsButton" src={heartsButton} />
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <img src={dice} style={{ width: "150px" }} alt="dice" />
        <img src={slideBase} style={{ width: "250px" }} alt="diamondCard" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0px",
          }}
        >
          <span
            style={{
              fontWeight: 300 /* Light font weight */,
              fontStyle: "italic" /* Italic style */,
              fontSize: "26px",
              color: "#E7B960",
            }}
            className="cormorant-font"
          >
            Double Down
          </span>
          <span
            style={{
              fontWeight: 300 /* Light font weight */,
              fontStyle: "italic" /* Italic style */,
              fontSize: "20px",
              color: "#E7B960",
            }}
            className="cormorant-font"
          >
            $1495
          </span>
          <ul
            style={{
              fontStyle: "italic" /* Italic style */,
              fontSize: "14px",
              color: "#fff",
            }}
          >
            <li>2 Black Jacks Tables</li>
            <li>2 Texas Hold'em Table</li>
            <li>2 Tables of your choice</li>
            <li>Large craps not included</li>
          </ul>
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
          >
            RENT NOW <img alt="heartsButton" src={heartsButton} />
          </button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
        }}
      >
        <img src={coin} style={{ width: "150px" }} alt="coin" />
        <img src={slideBase} style={{ width: "250px" }} alt="diamondCard" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0px",
          }}
        >
          <span
            style={{
              fontWeight: 300 /* Light font weight */,
              fontStyle: "italic" /* Italic style */,
              fontSize: "26px",
              color: "#E7B960",
            }}
            className="cormorant-font"
          >
            StraightMoney
          </span>
          <span
            style={{
              fontWeight: 300 /* Light font weight */,
              fontStyle: "italic" /* Italic style */,
              fontSize: "20px",
              color: "#E7B960",
            }}
            className="cormorant-font"
          >
            $2395
          </span>
          <ul
            style={{
              fontStyle: "italic" /* Italic style */,
              fontSize: "14px",
              color: "#fff",
            }}
          >
            <li>5 Black Jack Tables</li>
            <li>2 Texas Hold'em Tables</li>
            <li>1 Full Size Craps Table</li>
            <li>1 Roulette Table</li>
          </ul>
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
            RENT NOW <img alt="heartsButton" src={heartsButton} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
