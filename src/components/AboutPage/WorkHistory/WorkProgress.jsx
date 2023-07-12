import React from "react";
import { WorkNumber, WorkStatus } from "./WorkHistory.styles";

const WorkProgress = () => {
  return (
    <WorkStatus>
      <WorkNumber align borderR="1px solid #D9D9D9" borderB="1px solid #D9D9D9">
        <h1>12K+</h1>
        <p>Completed Project</p>
      </WorkNumber>
      <WorkNumber borderB="1px solid #D9D9D9" padding="0px 0px 40px 50px" align>
        <h1>100+</h1>
        <p>Team Worker</p>
      </WorkNumber>
      <WorkNumber align padding="40px 26px 0px 0px">
        <h1>13+</h1>
        <p>Year Of Experience</p>
      </WorkNumber>
      <WorkNumber
        borderl="1px solid #D9D9D9"
        padding="40px 0px 0px 50px"
        margin="-1px"
        align
      >
        <h1>150+</h1>
        <p>Satisfied Clients</p>
      </WorkNumber>
    </WorkStatus>
  );
};

export default WorkProgress;
