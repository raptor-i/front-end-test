import React from "react";
import "./Option1.css";

import CboxActive from "../../images/CboxActive.svg";

import Icon360 from "../../images/360-degree.svg";

const Option1 = () => {
  return (
    <div className="Options__Main">
      <img src={Icon360}></img>
      <div className="Options__Checkbox">
        <img src={CboxActive}></img>
        <p>Virtual Tour</p>
      </div>
    </div>

  );
};

export default Option1;
