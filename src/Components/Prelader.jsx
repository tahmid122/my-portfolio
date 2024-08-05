import React from "react";
import TypeWritter from "./TypeWritter";

const Prelader = () => {
  return (
    <div className="preloader">
      <h1>
        <TypeWritter color={"white"} texts={["Loading..."]} />
      </h1>
    </div>
  );
};

export default Prelader;
