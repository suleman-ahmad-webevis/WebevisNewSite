import React from "react";
import { WorkNumber, WorkStatus, WorkWrapper } from "./WorkHistory.styles";
import { LinkButton } from "src/components/Button.styles";

const WorkProgress = () => {
  return (
    <WorkWrapper>
      <WorkStatus>
        <WorkNumber>
          <h1>500+</h1>
          <p>Completed Project</p>
        </WorkNumber>
        <WorkNumber>
          <h1>100+</h1>
          <p>Team Worker</p>
        </WorkNumber>
        <WorkNumber>
          <h1>10+</h1>
          <p>Year Of Experience</p>
        </WorkNumber>
        <WorkNumber>
          <h1>150+</h1>
          <p>Satisfied Clients</p>
        </WorkNumber>
      </WorkStatus>
      <div className="explore">
        <span>Ready to Explore Possibilities?</span>
        <LinkButton
          href="contact-us"
          width="160"
          minWidth="140"
          height="50"
          minheight="40"
          size="16"
          minsize="14"
        >
          Request a Quote
        </LinkButton>
      </div>
    </WorkWrapper>
  );
};

export default WorkProgress;
