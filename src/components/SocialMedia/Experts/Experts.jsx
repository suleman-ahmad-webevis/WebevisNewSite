import React from "react";
import { ExpertSec, ExpertText, FlootingText } from "./Expert.styles";
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
        <FlootingText>
          <h6>
            Your content will be created ahead of time, so posts are scheduled
            out for the month. Throughout the month, we’ll strategically boost
            content to maximize visibility for you.
          </h6>
        </FlootingText>
        <FlootingText left="49%">
          <h6>
            Your content will be created ahead of time, so posts are scheduled
            out for the month. Throughout the month, we’ll strategically boost
            content to maximize visibility for you.
          </h6>
        </FlootingText>
        <FlootingText left="72%" top="50%">
          <h6>
            Your content will be created ahead of time, so posts are scheduled
            out for the month. Throughout the month, we’ll strategically boost
            content to maximize visibility for you.
          </h6>
        </FlootingText>
        <FlootingText left="28%" top="50%">
          <h6>
            Your content will be created ahead of time, so posts are scheduled
            out for the month. Throughout the month, we’ll strategically boost
            content to maximize visibility for you.
          </h6>
        </FlootingText>
      </ExpertText>
      slider pending
    </ExpertSec>
  );
};

export default Experts;
