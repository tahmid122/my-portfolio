import React from "react";

const HaveSend = ({ text1, text2 }) => {
  return (
    <div data-aos="zoom-in" data-aos-duration="1000">
      <h3 className="contact-title padd-15">{text1}</h3>
      <h4 className="contact-sub-title padd-15">{text2}</h4>
    </div>
  );
};

export default HaveSend;
