import React from "react";
import { TechSec } from "./Technologies.style";

import Image from "next/image";
import { Container } from "src/components/Container.styles";
import Sliders from "src/components/socialMediaSlider/Slider";
import { WebData } from "./WebData";

const Technologies = () => {
  return (
    <Container>
      <TechSec>
        <h2>Technologies We Use For Web  Development</h2>
      </TechSec>
      <Sliders arr={WebData} />
    </Container>
  );
};

export default Technologies;
