import React, { useEffect, useState } from "react";

const Tab1 = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState("0");

  useEffect(() => {
    setActiveTab(0);
  }, []);

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
              borderBottom: activeTab === index ? "2px solid transparent" : "0px solid transparent",
              fontWeight: activeTab === index ? 600 : 300,
            }}
            onClick={() => setActiveTab(index)}
            className="gradient-text cormorant-font tab-button"
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
            {activeTab === index && tab.content}
            {/* Only render content if tab is active */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab1;
