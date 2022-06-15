import React from "react";
import "./Option2.css"
import IconPicture from "../../images/picture.svg";
import CboxActive from "../../images/CboxActive.svg";


const Option2 = () => {
  return (
    <div className="Option2__Main">
      <img src={IconPicture}></img>
        <div className="Option2__Checkbox">
            <img src={CboxActive}></img>
            <p>Rendered Images</p>
        </div>
    </div>
  );
};

export default Option2;
