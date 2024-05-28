import React from "react";
import ProductCards from "../../common/dummydata/ProductCards";
import {  SpecialityGamesData } from "../../common/dummydata/DummyData";

const SpecialityGames = () => {
  return (
    <div
      style={{
        padding: "40px 60px",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      <ProductCards SliderData={SpecialityGamesData} />
    </div>
  );
};

export default SpecialityGames;
