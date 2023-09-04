import React from "react";
import Sliders from "src/components/socialMediaSlider/Slider";
import { technologyData } from "./TechnologyData";
import { Container } from "src/components/Container.styles";
import { SliderHolder } from "./Technology.styles";
const Technology = () => {
  return (
    <SliderHolder>
      <Container>
        <h2>Technologies We Use</h2>
        <p>
          We work with cutting-edge technologies designed to solve your product
          requirements. Focus on finding solutions for your business needs while
          we handle the technical aspect.
        </p>
      </Container>
      <Sliders arr={technologyData} />
    </SliderHolder>
  );
};

export default Technology;
