import React from "react";
import Footer from "./components/footer/Footer";
import Options from "./components/options/Options";
import Progress from "./components/progress/Progress";
import Step from "./components/step/Step";
import "./Task-1.css";
const Task1 = () => {
  return (
    <div className="Task1__Body">
      <div className="Body__Task1">
        <div className="Task1__Progress">
          <Progress/>
        </div>
          <Step/>
          <Options/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Task1;
