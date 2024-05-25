import React from "react";
import Tab1 from "../../common/tabs/Tab1";
import CasinoGames from "./CasinoGames";
import SpecialityGames from "./SpecialityGames";
const tabsData = [
  { title: "Casino Games", content: <CasinoGames /> },
  { title: "Speciality Games", content: <SpecialityGames /> },
];
const Index = () => {
  return (
    <div>
      <Tab1 tabsData={tabsData} />
    </div>
  );
};

export default Index;
