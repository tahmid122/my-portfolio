import React from "react";

const PageTitle = ({ text }) => {
  return (
    <div className="row">
      <div className="section-title padd-15">
        <h2>{text}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
