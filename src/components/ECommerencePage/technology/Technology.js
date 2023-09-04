import React from "react";
import { Container } from "src/components/Container.styles";
import { TechData } from "./TechData";
import Image from "next/image";
import { TechSec } from "./Technology.style";
import Sliders from "src/components/socialMediaSlider/Slider";


const Technology = () => {
  return (
    <Container>
      <TechSec>
        <h2>Technologies We Use</h2>
        <p>
          We work with cutting-edge technologies designed to solve your product
          requirements. Focus on finding solutions for your business needs while
          we handle the technical aspect.
        </p>

      </TechSec>
      <Sliders arr={TechData} />
    </Container>
  );
};

export default Technology;
