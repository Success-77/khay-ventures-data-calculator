import React, { useState } from "react";
import VideoGuide from "./VideoGuide";
import StepByStepGuide from "./StepByStepGuide";
import "../styles/Guide.css";

const Guide = () => {
  const [activeTab, setActiveTab] = useState(null);

  const handleTabClick = (tab) => {
    setActiveTab(tab);

    const clickedButton = document.querySelector(
      `.tab-button[data-tab="${tab}"]`
    );
    if (clickedButton) {
      const tabsContainer = document.querySelector(".tabs");
      const homeHeader = document.querySelector(".home-header");
      clickedButton.classList.add("clicked");
      tabsContainer.classList.add("tab-clicked");
      homeHeader.classList.add("move-header");
    }
  };

  return (
    <div className="home-guide">
      <h3 className="home-header">Select a guide option to continue</h3>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "MTN" ? "active" : ""}`}
          onClick={() => handleTabClick("MTN")}
          data-tab="MTN"
        >
          Step by step guide
        </button>
        <button
          className={`tab-button ${activeTab === "AirtelTigo" ? "active" : ""}`}
          onClick={() => handleTabClick("AirtelTigo")}
          data-tab="AirtelTigo"
        >
          Video guide
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "MTN" && <StepByStepGuide />}
        {activeTab === "AirtelTigo" && <VideoGuide />}
      </div>
    </div>
  );
};

export default Guide;
