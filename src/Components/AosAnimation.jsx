import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const AosAnimation = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return <div data-aos="flip-right"></div>;
};

export default AosAnimation;
