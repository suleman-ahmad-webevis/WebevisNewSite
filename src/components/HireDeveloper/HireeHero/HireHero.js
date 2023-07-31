import React from "react";
import { Container } from "src/components/Container.styles";
import { Heading, Hero, Hire, ImageHolder } from "./HireHero.styles";
import { PrimaryButton } from "src/components/Button.styles";
import DeveloperSlider from "../DeveloperSlider/DeveloperSlider";

const HireHero = ({ heading1, heading2, heading3, developerData }) => {
  return (
    <Hire>
      <Container>
        <Hero>
          <Heading>
            <h1>
              {heading1} <span>{heading2} </span>
              {heading3}
            </h1>
            <p>
              Hire top software developers and engineers on-demand. From Java,
              .Net, Python, and C++ to Node.js and React, our experts are always
              ready to go.
            </p>
            <PrimaryButton
              width="190"
              height="50"
              minWidth="170"
              minHeight="40"
            >
              Hire a Developer
            </PrimaryButton>
          </Heading>
          <ImageHolder>
            <DeveloperSlider arr={developerData} />
          </ImageHolder>
        </Hero>
      </Container>
    </Hire>
  );
};

export default HireHero;
