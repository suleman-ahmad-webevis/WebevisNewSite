import React from "react";
import { Container } from "src/components/Container.styles";
import {
  FloatingImage,
  HireProcess,
  ProcessSection,
  ProcessText,
  Steps,
  StyledHire,
} from "./Hire.styles";
import line from "../../../assets/images/Expert/line.png";
import Vline from "../../../assets/images/Expert/verticalLine.png";
import Image from "next/image";
import { reactHire } from "./HireData";

const Hire = ({ heading, marginBottom, marginTop, data = reactHire }) => {
  return (
    <Container>
      <StyledHire marginBottom={marginBottom} marginTop={marginTop}>
        <h1>{heading}</h1>
        <HireProcess>
          {data.map((elem, ind) => (
            <ProcessSection key={ind}>
              <Steps>{ind + 1}</Steps>
              <ProcessText>
                <h5>{elem.heading}</h5>
                <p>{elem.text}</p>
              </ProcessText>
            </ProcessSection>
          ))}

          <FloatingImage top="13%" left="auto">
            <Image src={line} alt="line" className="image" />
          </FloatingImage>
          <FloatingImage top1="0%" left="6%">
            <Image src={Vline} alt="line" className="imageV" />
          </FloatingImage>
        </HireProcess>
      </StyledHire>
    </Container>
  );
};

export default Hire;
