import React, { useState, useMemo } from "react";
import "./App.css";
import Calculator from "./components/Calculator";
import Navbar from "./components/TopBar";

const App = () => {
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

  const mtnPrices = useMemo(
    () => ({
      1: 6,
      2: 11,
      3: 17,
      4: 22,
      5: 25,
      6: 30,
      7: 34,
      8: 38,
      10: 46,
      15: 58,
      20: 83,
      25: 103,
      30: 120,
      40: 160,
      50: 190,
      100: 380,
    }),
    []
  );

  const atPrices = useMemo(
    () => ({
      1: 3.5,
      2: 7,
      3: 10,
      4: 13,
      5: 16,
      6: 19,
      7: 22,
      8: 25,
      10: 30,
      15: 47,
      20: 61,
      25: 81,
      30: 90,
      40: 110,
      50: 134,
      100: 240,
    }),
    []
  );

  const vodaPrices = useMemo(
    () => ({
      1: 5.4,
      2: 10.4,
      3: 15,
      4: 19,
      5: 22,
      10: 30,
      15: 60,
      20: 80,
      50: 196,
      100: 385,
    }),
    []
  );

  return (
    <div className="App">
      <Navbar />
      <h3 className="home-header">Daily Sales Calculator</h3>
      <div className="tabs">
        <button
          className={`tab-button ${activeTab === "MTN" ? "active" : ""}`}
          onClick={() => handleTabClick("MTN")}
          data-tab="MTN"
        >
          MTN
        </button>
        <button
          className={`tab-button ${activeTab === "AirtelTigo" ? "active" : ""}`}
          onClick={() => handleTabClick("AirtelTigo")}
          data-tab="AirtelTigo"
        >
          AirtelTigo
        </button>
        <button
          className={`tab-button ${activeTab === "Vodafone" ? "active" : ""}`}
          onClick={() => handleTabClick("Vodafone")}
          data-tab="Vodafone"
        >
          Vodafone
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "MTN" && (
          <Calculator initialAgentPrices={mtnPrices} network={"MTN"} />
        )}
        {activeTab === "AirtelTigo" && (
          <Calculator initialAgentPrices={atPrices} network={"AirtelTigo"} />
        )}
        {activeTab === "Vodafone" && (
          <Calculator initialAgentPrices={vodaPrices} network={"Vodafone"} />
        )}
      </div>
    </div>
  );
};

export default App;
