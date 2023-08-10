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

const Hire = ({ heading, marginBottom, marginTop }) => {
  return (
    <Container>
      <StyledHire marginBottom={marginBottom} marginTop={marginTop}>
        <h1>{heading}</h1>
        <HireProcess>
          <ProcessSection>
            <Steps>1</Steps>
            <ProcessText>
              <h5>Discussion</h5>
              <p>
                Engage in a detailed conversation about your project&apos;s{" "}
                <br />
                specifications, resource preferences, technical prerequisites,
                and budget.
              </p>
              {/* <p>
                Describe the Dedicated Resourse you&apos;re looking for. <br />
                Tell us about the role, technical needs, and hiring budget.
              </p> */}
            </ProcessText>
          </ProcessSection>
          <ProcessSection>
            <Steps>2</Steps>
            <ProcessText>
              <h5>Selection </h5>
              <p>
                Our experts meticulously select dedicated resources that
                perfectly match your project&apos;s skill
                <br />
                needs and objectives.
              </p>
            </ProcessText>
          </ProcessSection>
          <ProcessSection>
            <Steps>3</Steps>
            <ProcessText>
              <h5>Onboarding </h5>
              <p>
                Once approved, the chosen resources seamlessly integrate into
                your team, ensuring swift alignment and collaborative success.
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
