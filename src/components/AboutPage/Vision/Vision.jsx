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
          <h2>Our Vision</h2>
          <p>
            At Webevis Technologies, we envision a dynamic future where
            innovation and imagination collide, propelling businesses toward
            unprecedented success. Fueled by our unwavering passion and
            expertise,
          </p>
          <p>
            we strive to revolutionize industries and empower businesses to
            reach unparalleled heights. With our visionary approach,
            cutting-edge solutions, and a touch of audacity, we break barriers,
            creating a world where success knows no bounds. Join us on this
            exhilarating journey as we redefine the very fabric of
            possibilities. Let&apos;s craft the digital future!
          </p>
        </VisionText>
        <VisionText>
          <h2>Our Mission</h2>
          <p>
            Our mission is to push boundaries, break norms, and transform the
            digital landscape. We are driven by a passion for digital innovation
            and a commitment to delivering exceptional results. With our expert
            team, the latest technology, and personalized approach,
          </p>
          <p>
            we propel your journey toward digital transformation. We forge a
            path to technological greatness, pushing businesses toward unrivaled
            success in the digital realm. Step into the realm of unlimited
            possibilities as we pave the way to digital dominance.
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
