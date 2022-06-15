import React from 'react';
import "./Option3.css";
import IconVideo from "../../images/video.svg";
import CboxInActive from "../../images/CboxInactive.svg";

const Option3 = () => {
  return (
    <div className='Option3__Main'>
        <img src={IconVideo}></img>
        <div className='Option3__Checkbox'>
            <img src={CboxInActive}></img>
            <p>Animated Video</p>
        </div>
    </div>
  )
}

export default Option3