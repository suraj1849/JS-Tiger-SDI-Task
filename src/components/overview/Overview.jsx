import React from "react";
import "./overview.css";

const Overview = ({textTop, textBottom, iconSrc}) => {
  return (
    <>
      <div className="overview">
        <span className="booking__text">
          <span className="text__top">{textTop}</span>
          <span className="text__bottom">{textBottom}</span>
        </span>
        <img src={iconSrc} alt="" />
      </div>
    </>
  );
};

export default Overview;
