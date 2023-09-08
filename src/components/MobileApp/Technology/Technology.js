import React from "react";
import Sliders from "src/components/socialMediaSlider/Slider";
import { technologyData } from "./TechnologyData";
import { Container } from "src/components/Container.styles";
import { SliderHolder } from "./Technology.styles";
const Technology = ({ Text, heading }) => {
  return (
    <SliderHolder>
      <Container>
        <h2>{heading}</h2>
        <p>{Text}</p>
      </Container>
      <Sliders arr={technologyData} />
    </SliderHolder>
  );
};

export default Technology;
