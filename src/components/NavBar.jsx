import React, { useState, useCallback } from "react";
import "../styles/NavBar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/sbh_logo.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  function getGreeting() {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();

    let greeting;

    if (currentHour >= 0 && currentHour < 12) {
      greeting = "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      greeting = "Good Afternoon";
    } else {
      greeting = "Good Evening";
    }

    return greeting;
  }

  const greet = getGreeting();
  return (
    <div className="nav-container">
      <nav>
        <div className="nav-brand">
          <Link to={"/"} className="link brand">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <Link to={"/"} className="link brand brand-name">
            {greet}
          </Link>
        </div>
        <div className={`nav-hamburger ${isOpen ? "open" : ""}`}>
          <div
            className="hamburger"
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
            <div className={`bar ${isOpen ? "open" : ""}`}></div>
          </div>
        </div>
        <div className={`nav-links-container ${isOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li className="link nav-link">
              <NavLink to={"/"} onClick={handleToggle}>
                Separate
              </NavLink>
            </li>
            <li className="link nav-link">
              <NavLink to={"/combine"} onClick={handleToggle}>
                Combine
              </NavLink>
            </li>
            <li className="link nav-link">
              <NavLink to={"/guide"} onClick={handleToggle}>
                Guide
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
