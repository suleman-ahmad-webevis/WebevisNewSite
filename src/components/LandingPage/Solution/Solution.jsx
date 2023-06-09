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

const Solution = () => {
  return (
    <SolutionWrapper>
      <SolutionMain>
        <SolutionText>
          <h3>
            Discuss your project's scope, discover the ideal solutions, and
            achieve outstanding results.
            {/* Discuss your project, get the best solution <br /> and result */}
          </h3>
          <button>schedule a Call</button>
        </SolutionText>
        <SoultionImage>
          <Image src={bannerImage} alt="bannerImage" />
        </SoultionImage>
      </SolutionMain>
      <FloatingImage>
        <Image src={bannerImage} alt="bannerImage" />
      </FloatingImage>
    </SolutionWrapper>
  );
};

export default Solution;
