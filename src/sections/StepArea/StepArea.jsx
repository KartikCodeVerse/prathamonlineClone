import React from "react";
import "./StepArea.css";
import StepBox from "../../components/StepBox/StepBox";
import { Stepdata } from "../../assets/Step_data";

const StepArea = () => {
  return (
    <div className="step_area_section">
      <div className="sec_container">
        <div id="space" className="row">
          {Stepdata.map((data, i) => {
            return (
              <StepBox
                key={i}
                icon={data.icon}
                stepTitle={data.stepTitle}
                stepPara={data.stepPara}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepArea;
