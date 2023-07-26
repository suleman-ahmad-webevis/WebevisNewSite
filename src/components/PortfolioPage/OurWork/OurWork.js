import React from "react";
import { Container } from "src/components/Container.styles";
import { Flex } from "src/components/Flex.styles";
import { HeroImage, Work, WorkSection } from "./OurWork.styles";

const OurWork = (props) => {
  return (
    <WorkSection>
      <Container className="container">
        <div className="Headlines">
          <h1>{props.heading}</h1>
          <p>{props.para}</p>
        </div>
      </Container>
    </WorkSection>
  );
};

export default OurWork;
