import React from "react";
import { HeroSec, HeroText } from "./Hero.style";
import { PrimaryButton } from "src/components/Button.styles";
import { Container } from "src/components/Container.styles";
const Hero = () => {
  return (
    <HeroSec>
      <Container className="container">

      <HeroText>
        <h1>WEB DEVELOPMENT SERVICES</h1>
        <p>
          Our web development services are designed to create remarkable online
          experiences that captivate your target audience and support business
          success.
        </p>
        <PrimaryButton size="24" color="#fff" width="238" height="50" radius="54px">
          {" "}
          Let’s Get Started
        </PrimaryButton>
      </HeroText>
      </Container>

    </HeroSec>
  );
};

export default Hero;
