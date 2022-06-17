import React from 'react'

import 'aframe';
import {Entity, Scene} from 'aframe-react';
import StockImage from "./Image/Image.jpg"

const Task2 = () => {
  return (
    <Scene>
    <Entity primitive='a-sky' src={StockImage}/>
  </Scene>
  )
}

export default Task2;