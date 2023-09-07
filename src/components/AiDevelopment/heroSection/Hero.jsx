import React from "react";
import { Container } from "src/components/Container.styles";
import { HeroSec } from "./Hero.style";
import { PrimaryButton } from "src/components/Button.styles";

const Hero = () => {
  return (
    <HeroSec>
      <Container className="container">
        <div className="hero_text">
          <h1>AI Development <br /> Services</h1>
          <p>
            Unlock the hidden potential of data to drive tangible business
            results – and do it faster than you’d expect
          </p>
          <PrimaryButton
            hover="black"
            width="194"
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
