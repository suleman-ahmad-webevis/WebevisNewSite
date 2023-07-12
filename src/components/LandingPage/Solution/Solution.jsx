import React from "react";
import {
  FloatingImage,
  SolutionMain,
  SolutionText,
  SolutionWrapper,
  SoultionImage,
} from "./Solution.styles";
import bannerImage from "../../../assets/images/Homemain/solutionbanner.png";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";

const Solution = ({ background }) => {
  return (
    <SolutionWrapper background={background}>
      <div
        style={{ maxWidth: "1440px", position: "relative", margin: "0 auto" }}
      >
        <SolutionMain>
          <SolutionText>
            <h3>Discuss your Project, Get the best Solution and Result</h3>
            <PrimaryButton
              bg="#2b2c2f"
              radius="12px"
              size="24"
              minSize="18"
              width="261"
              height="50"
            >
              Schedule a Call
            </PrimaryButton>
          </SolutionText>
          <SoultionImage>
            <Image src={bannerImage} alt="bannerImage" />
          </SoultionImage>
        </SolutionMain>
        <FloatingImage>
          <Image src={bannerImage} alt="bannerImage" />
        </FloatingImage>
      </div>
    </SolutionWrapper>
  );
};

export default Solution;
