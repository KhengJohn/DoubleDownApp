import React, { useState } from "react";
const Tab1 = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "max-content",
          margin: "100px 0 0 60px",
        }}
      >
        {tabsData.map((tab, index) => (
          <button
            key={index}
            style={{
              borderBottom: activeTab === index ? "2px solid  " : "0px solid ",
              paddingBottom: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              paddingTop: "0.5rem",
              outline: "none",
              cursor: "pointer",
              backgroundColor: "initial",
              border: "none",
              borderImage:
                "linear-gradient(to right, #EFCE76 0%, #835A27 38%, #835A27 73%,#F4E285 100%) 1",
              borderImageSlice: "1",
              borderImageRepeat: "stretch",
              fontSize: "18px",
              fontWeight: activeTab === index ? 600 : 300,
            }}
            onClick={() => setActiveTab(index)}
            className="gradient-text cormorant-font"
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content-container">
        {tabsData.map((tab, index) => (
          <div
            style={{ color: "#FFF" }}
            key={tab.id}
            className={`tab-content ${activeTab === index ? "" : "hidden"}`}
          >
            {activeTab === index && tab.content}{" "}
            {/* Only render content if tab is active */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab1;
