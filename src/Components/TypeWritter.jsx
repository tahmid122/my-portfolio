import React from "react";
import { Typewriter } from "react-simple-typewriter";

const TypeWritter = ({ texts, color }) => {
  return (
    <span className="typing" style={{ color: color }}>
      <Typewriter
        words={texts}
        loop={false}
        typeSpeed={300}
        delaySpeed={1200}
        cursor={true}
        cursorBlinking={true}
      />
    </span>
  );
};

export default TypeWritter;
