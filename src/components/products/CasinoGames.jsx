import React from "react";
import ProductCards from "../../common/dummydata/ProductCards";
import { CasinoGamesData } from "../../common/dummydata/DummyData";
const CasinoGames = () => {
  return (
    <div
      style={{
        padding: "40px 60px",
        display: "flex",
        flexDirection: "column",
        gap: "25px",
      }}
    >
      <ProductCards ExploreData={CasinoGamesData}/>
    </div>
  );
};

export default CasinoGames;
