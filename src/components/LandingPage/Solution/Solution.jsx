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

const Solution = ({ background }) => {
  return (
    <SolutionWrapper background={background}>
      <div
        style={{ maxWidth: "1440px", position: "relative", margin: "0 auto" }}
      >
        <SolutionMain>
          <SolutionText>
            <h3>Discuss your project, get the best solution and result</h3>
            <button>Schedule a Call</button>
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
