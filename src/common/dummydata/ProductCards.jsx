import React from "react";
import { addtocarticon } from "../assets/images";
const ProductCards = ({ExploreData}) => {
  return (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          rowGap: '40px'
        }}
      >
        {ExploreData.map((items, index) => (
          <div
            key={index}
            style={{
              border: "1px solid transparent",
              borderImage:
                "linear-gradient(to right, #EFCE76 0%, #835A27 38%, #835A27 73%,#F4E285 100%) 1",
              borderImageSlice: "1",
              borderImageRepeat: "stretch",
              backgroundColor: "initial",
              color: "#E7B960",
              display: "flex",
              flexDirection: "column",
              width: "calc(24% - 20px)",
            }}
          >
            <div
              style={{
                padding: "20px 5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "190px", height: "190px" }}
                src={items.img}
                alt=""
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
                <span style={{ fontSize: "18px" }} className="cormorant-font">
                  {items.title}
                </span>
                <span style={{ color: "#FFF" }} className="gordita-font">
                  ${items.price}
                </span>
              </div>
              <img
                style={{ width: "30px", cursor: "pointer" }}
                src={addtocarticon}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
  );
};

export default ProductCards;
