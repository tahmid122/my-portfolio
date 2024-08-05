import React, { useState, useEffect } from "react";
import "/public/color-1.css";
import "../style-switcher.css";

import { FaCog } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Aside from "./Aside";
import Aos from "aos";
import "aos/dist/aos.css";
const Main = () => {
  const [dayNight, setDayNight] = useState(false);
  const [styleToggler, setStyleToggler] = useState(false);

  const root = document.querySelector(":root");

  const setActiveStyle = (color) => {
    root.style.setProperty("--skin-color", color);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setStyleToggler(false);
    });
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div
        className={`main-container padd-270  ${dayNight ? "dark" : null}`}
        style={{ overflow: "hidden" }}
      >
        <Aside />

        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />

        {/* Style Switcher Start */}
        <div className={`style-switcher ${styleToggler ? "open" : null}`}>
          <div
            className="style-switcher-toggler s-icon"
            onClick={() => {
              setStyleToggler(!styleToggler);
            }}
          >
            <FaCog className="style-switchcer-icon spinner" />
          </div>
          <div className="day-night s-icon">
            <FaMoon
              className={`style-switchcer-icon ${
                dayNight === false ? null : "d-none"
              }`}
              onClick={() => {
                setDayNight(!dayNight);
              }}
            />
            <FaSun
              className={`style-switchcer-icon ${
                dayNight === false ? "d-none" : null
              }`}
              onClick={() => {
                setDayNight(!dayNight);
              }}
            />
          </div>
          <h4>Theme Colors</h4>
          <div className="colors">
            <span
              className="color-1"
              onClick={() => {
                setActiveStyle("#ec1839");
              }}
            ></span>
            <span
              className="color-2"
              onClick={() => {
                setActiveStyle("#fa5b0f");
              }}
            ></span>
            <span
              className="color-3"
              onClick={() => {
                setActiveStyle("#37b182");
              }}
            ></span>
            <span
              className="color-4"
              onClick={() => {
                setActiveStyle("#1854b4");
              }}
            ></span>
            <span
              className="color-5"
              onClick={() => {
                setActiveStyle("#f021b2");
              }}
            ></span>
          </div>
        </div>
        {/* Style Switcher End */}
      </div>
    </>
  );
};

export default Main;
