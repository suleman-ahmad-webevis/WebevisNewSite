import React from "react";
import { ExpertSec, ExpertText } from "./Expert.styles";
import steps from "../../../assets/images/SocialMedia/steps.png";
import Image from "next/image";

const Experts = () => {
  return (
    <ExpertSec>
      <ExpertText>
        <h1>Sample Monthly Timeline</h1>
        <Image src={steps} alt="Steps" />
        <h2>Experts on every social media platform</h2>
        <p>
          We create and manage the complete social media package on every
          platform, with an understanding of the nuances between the platforms
          to provide the perfect message.
        </p>
      </ExpertText>
      slider pending
    </ExpertSec>
  );
};

export default Experts;
