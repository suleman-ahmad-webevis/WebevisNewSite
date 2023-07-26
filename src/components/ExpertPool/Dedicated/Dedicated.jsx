import React from "react";
import { Container } from "src/components/Container.styles";
import {
  DedicatedNumber,
  DedicatedSteps,
  DedicatedText,
  Dedicatedinfo,
  StyledDedicated,
} from "./Dedicated.styles";

const Dedicated = () => {
  return (
    <StyledDedicated>
      <h1>
        The Dedicated Development Team (DDT) model is an <br /> ideal approach
        if:
      </h1>
      <Dedicatedinfo>
        <DedicatedSteps order="0">
          <DedicatedNumber>1</DedicatedNumber>
          <DedicatedText>
            <h3>You have a long-term software development project</h3>
            <p>
              The DDT model is ideal for long-term projects that require
              continuous software development and maintenance.
            </p>
          </DedicatedText>
        </DedicatedSteps>
        <DedicatedSteps order="1">
          <DedicatedNumber>2</DedicatedNumber>
          <DedicatedText>
            <h3>You require high-level expertise</h3>
            <p>
              If your project requires specific technical skills and expertise,
              the DDT model can provide you with a team that has the necessary
              knowledge and experience.
            </p>
          </DedicatedText>
        </DedicatedSteps>
        <DedicatedSteps order="2">
          <DedicatedNumber>3</DedicatedNumber>
          <DedicatedText>
            <h3>You need flexibility and scalability</h3>
            <p>
              The DDT model provides flexibility and scalability, allowing you
              to adjust the size of your team based on your project needs.
            </p>
          </DedicatedText>
        </DedicatedSteps>
        <DedicatedSteps order="3">
          <DedicatedNumber>4</DedicatedNumber>
          <DedicatedText>
            <h3>You want cost-effectiveness</h3>
            <p>
              The DDT model can be a cost-effective solution compared to hiring
              full-time employees or working with a traditional software
              development agency.
            </p>
          </DedicatedText>
        </DedicatedSteps>
      </Dedicatedinfo>
    </StyledDedicated>
  );
};

export default Dedicated;
