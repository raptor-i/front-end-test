import React from "react";
import Checkbox from "./components/Option1/Option1";
import Footer from "./components/footer/Footer";
import Options from "./components/options/Options";
import Progress from "./components/progress/Progress";
import Step from "./components/step/Step";
import "./Task-1.css";
import ButtonCont from "./components/Button/Button";
import Logo from "./components/Logo/Logo";
import ProgressSmall from "./SmallComponents/ProgressSmall/ProgressSmall";


const Task1 = () => {
  return (
    <div className="Task1__Body">
      <div className="Main__Small-Screen">
        <ProgressSmall/>
      </div>
      <div className="Main__Body">
          <Progress/>
          <Step/>
          <Options/>
          <ButtonCont></ButtonCont>
      </div >
      <div className="Logo__Task1">
        <Logo></Logo>
      </div>
        
    </div>
  );
};

export default Task1;
