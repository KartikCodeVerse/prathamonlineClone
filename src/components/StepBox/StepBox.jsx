import React from "react";
import "./StepBox.css";

const StepBox = ({ icon:Icon, stepTitle, stepPara }) => {
  return (
    <div className="step_box">
      <div className="stepIcon">
        <span>
          <Icon />
        </span>
      </div>
      <div className="step_content">
        <h4>{stepTitle}</h4>
        <p>{stepPara}</p>
      </div>
    </div>
  );
};

export default StepBox;
