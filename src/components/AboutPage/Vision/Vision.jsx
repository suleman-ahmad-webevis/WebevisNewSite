import React from "react";
import { ContainerWrapper } from "src/components/Container.styles";
import { StyledVision, VisionImage, VisionText } from "./Vision.styles";
import vision from "../../../assets/images/AboutUs/vission.png";
import mission from "../../../assets/images/AboutUs/mission.png";
import Image from "next/image";

const Vision = () => {
  return (
    <ContainerWrapper>
      <StyledVision>
        <VisionImage>
          <Image src={vision} alt="" />
        </VisionImage>
        <VisionText>
          <h2>Our Inspiring Vision</h2>
          <p>
            We envision a future where innovation knows no bounds, where
            groundbreaking ideas transform industries, and where technological
            advancements create positive change. We strive to create disruptive
            AI-driven solutions that redefine the landscape of the digital
            world.
          </p>
          <p>
            With unwavering determination, we leverage the power of our
            collective imagination to shape a world filled with endless
            possibilities. Together, we dare to dream, innovate fearlessly, and
            pave the way for a brighter tomorrow.
          </p>
        </VisionText>
        <VisionText>
          <h2>Our Impactful Mission</h2>
          <p>
            At the core of our mission lies empowering businesses with
            transformative technology solutions. Through our proficiency in
            custom software development, Cloud Services, AI/ML/AL, DevOps, and
            cybersecurity, we craft personalized solutions that propel growth,
            optimize operations, and spur innovation.
          </p>
          <p>
            By prioritizing our clients&apos; needs, we consistently surpass
            expectations, nurturing enduring partnerships grounded in trust and
            mutual collaboration. Join us in shaping the future of business.
          </p>
        </VisionText>
        <VisionImage>
          <Image src={mission} alt="" />
        </VisionImage>
      </StyledVision>
    </ContainerWrapper>
  );
};

export default Vision;
