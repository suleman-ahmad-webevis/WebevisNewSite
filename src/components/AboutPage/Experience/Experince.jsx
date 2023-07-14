import React, { useState } from "react";
import dynamic from "next/dynamic";
import {
  ExperienceText,
  ProgressCover,
  ProgressMain,
  ProgressWrapper,
  StyledExperience,
} from "./Experience.styles";
import { ContainerWrapper } from "src/components/Container.styles";
import ProgressBar from "./Progressbar";

const Experince = () => {
  return (
    <StyledExperience>
      <ContainerWrapper>
        <ExperienceText>
          <h2>We’re Very Experience and Professionals</h2>
          <p>
            With over a decade of experience, we’ve established ourselves as one
            of the pioneering agencies in the region. Our small, flexible, agile
            and design-led structures and processes allow us to highly
            responsive and innovative.
          </p>
        </ExperienceText>
      </ContainerWrapper>
      <ProgressWrapper>
        <ContainerWrapper>
          <ProgressCover>
            <ProgressMain>
              <ProgressBar value={20} />
              <p>Web Development</p>
            </ProgressMain>
            <ProgressMain>
              <ProgressBar value={20} />
              <p>Mobile Development</p>
            </ProgressMain>
            <ProgressMain>
              <ProgressBar value={50} />
              <p>Digital Marketing </p>
            </ProgressMain>
            <ProgressMain>
              <ProgressBar value={20} />
              <p>Customer Support</p>
            </ProgressMain>
          </ProgressCover>
        </ContainerWrapper>
      </ProgressWrapper>
    </StyledExperience>
  );
};

export default Experince;
