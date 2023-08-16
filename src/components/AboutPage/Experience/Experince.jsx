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
          <h2>Our Proven Professional Expertise And Unrivaled Experience</h2>
          <p>
            We pride ourselves on our years of experience, delivering impeccable
            service and solutions with the highest level of professionalism. We
            work closely with our clients, fostering open communication and a
            deep understanding of their needs.
          </p>
        </ExperienceText>
      </ContainerWrapper>
      <ProgressWrapper>
        <ContainerWrapper>
          <ProgressCover>
            <ProgressMain>
              <ProgressBar value={95} />
              <p>Web Development</p>
            </ProgressMain>
            <ProgressMain>
              <ProgressBar value={88} />
              <p>Mobile Development</p>
            </ProgressMain>
            <ProgressMain>
              <ProgressBar value={98} />
              <p>Digital Marketing </p>
            </ProgressMain>
            <ProgressMain>
              <ProgressBar value={75} />
              <p>Customer Support</p>
            </ProgressMain>
          </ProgressCover>
        </ContainerWrapper>
      </ProgressWrapper>
    </StyledExperience>
  );
};

export default Experince;
