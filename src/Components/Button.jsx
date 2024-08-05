import React from "react";
import { Link } from "react-scroll";

const Button = ({ text }) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <Link to="contact" className="btn hire-me">
        {text}
      </Link>
    </div>
  );
};

export default Button;
