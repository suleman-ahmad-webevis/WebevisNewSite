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
      <h1>When To Opt For Dedicated Resource Model (DRM)?</h1>

      <Dedicatedinfo>
        <DedicatedSteps order="0">
          <DedicatedNumber>1</DedicatedNumber>
          <DedicatedText>
            <h3>Complex, Long-Term Projects </h3>
            <p>
              DRM excels when handling complex projects requiring specialized
              skills and sustained effort throughout the project&apos;s lifespan
            </p>
          </DedicatedText>
        </DedicatedSteps>
        <DedicatedSteps order="1">
          <DedicatedNumber>2</DedicatedNumber>
          <DedicatedText>
            <h3>Variable Workloads </h3>
            <p>
              Ideal for fluctuating workloads, the model ensures you have the
              right talent when needed, avoiding resource shortages or excess.
            </p>
          </DedicatedText>
        </DedicatedSteps>
        <DedicatedSteps order="2">
          <DedicatedNumber>3</DedicatedNumber>
          <DedicatedText>
            <h3>Specific Expertise Needed </h3>
            <p>
              Access a diverse talent pool with specialized skills tailored to
              your project requirements, ensuring high-quality results.
            </p>
          </DedicatedText>
        </DedicatedSteps>
        <DedicatedSteps order="3">
          <DedicatedNumber>4</DedicatedNumber>
          <DedicatedText>
            <h3>Cost-Effective Project Execution </h3>
            <p>
              DRM offers budget-friendly solutions while maintaining
              high-quality deliverables through efficient resource allocation.
            </p>
          </DedicatedText>
        </DedicatedSteps>
      </Dedicatedinfo>
    </StyledDedicated>
  );
};

export default Dedicated;
