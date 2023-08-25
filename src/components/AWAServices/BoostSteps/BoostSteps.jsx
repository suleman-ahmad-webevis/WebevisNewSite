import React from "react";
import Image from "next/image";
import {
  BoostImage,
  BoostStep,
  BoostHeading,
  BoostStepsContainer,
  BoostStepsContent,
  FloatingArrow,
  ResponsiveImageWidth,
  FloatingImage,
} from "./BoostStepsStyles";
import StepOne from "../../../assets/images/Services/AWAServices/StepOne.png";
import StepTwo from "../../../assets/images/Services/AWAServices/StepTwo.png";
import StepThree from "../../../assets/images/Services/AWAServices/StepThree.png";
import Arrow from "../../../assets/images/Services/AWAServices/Arrow.png";
import { ResponsiveImage } from "../AiWebsiteAudit/AiWebsiteAuditStyles";
import mobileImage from "../../../assets/images/Services/AWAServices/MobileImage.png";
import { Container } from "src/components/Container.styles";

const BoostSteps = () => {
  return (
    <Container>
      <BoostStepsContainer>
        <h2>3 Simple StepsTo Boost Your Website</h2>
        <BoostStepsContent>
          <BoostStep addBefore>
            <BoostImage>
              <Image src={StepOne} alt="Step" />
            </BoostImage>
            <BoostHeading>
              <h3>Do Audit</h3>
              <p>Choose your audit option and get the report</p>
            </BoostHeading>
          </BoostStep>
          <BoostStep addBefore>
            <BoostImage>
              <Image src={StepTwo} alt="Step" />
            </BoostImage>
            <BoostHeading>
              <h3>Implement</h3>
              <p>
                You or your web developer cancan utilize all recommendations
              </p>
            </BoostHeading>
          </BoostStep>
          <BoostStep>
            <BoostImage>
              <Image src={StepThree} alt="Step" />
            </BoostImage>
            <BoostHeading>
              <h3>More Clients</h3>
              <p>
                Better performing website and high Google ranking lead to a
                bigger number of requests
              </p>
            </BoostHeading>
          </BoostStep>
        </BoostStepsContent>
      </BoostStepsContainer>
    </Container>
  );
};

export default BoostSteps;
