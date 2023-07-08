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

const Hire = () => {
  return (
    <Container>
      <StyledHire>
        <h1>It&apos;s Easy to Hire Dedicated Recourses With Webevis</h1>
        <HireProcess>
          <ProcessSection>
            <Steps>1</Steps>
            <ProcessText>
              <h5>Request</h5>
              <p>
                Describe the Dedicated Resourse you&apos;re looking for. <br />
                Tell us about the role, technical needs, and hiring budget.
              </p>
            </ProcessText>
          </ProcessSection>
          <ProcessSection>
            <Steps>2</Steps>
            <ProcessText>
              <h5>Interview</h5>
              <p>
                Receive vetted candidate profiles matching your engineering
                needs.
                <br />
                You select who to interview.
              </p>
            </ProcessText>
          </ProcessSection>
          <ProcessSection>
            <Steps>3</Steps>
            <ProcessText>
              <h5>Hire</h5>
              <p>
                When ready, select a Dedicated Resourse to hire. <br />
                Sign an NDA with your new Dedicated Resourse and we&apos;ll
                handle all the other paperwork!
              </p>
            </ProcessText>
          </ProcessSection>
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
