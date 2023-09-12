import React from "react";
import { Container } from "src/components/Container.styles";
import { HeroSec } from "./Hero.style";
import { PrimaryButton } from "src/components/Button.styles";

const Hero = () => {
  return (
    <HeroSec>
      <Container className="container">
        <div className="hero_text">
          <h1>
            IOS app <br /> development <br /> company
          </h1>
          <p>
            Explore new business destinations, accelerate growth, and captivate
            your users with custom iOS apps
          </p>
          <PrimaryButton
            hover="black"
            width="298"
            minWidth="163"
            minheight="40"
            height="50"
            minsize="18"
            radius="12px"
            size="24"
          >
            Let’s Talk
          </PrimaryButton>
        </div>
      </Container>
    </HeroSec>
  );
};

export default Hero;
