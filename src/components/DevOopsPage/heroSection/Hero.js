import React from "react";
import { SecondaryButton } from "src/components/Button.styles";
import { Container } from "src/components/Container.styles";
import { HeroSec } from "./Hero.style";

const Hero = () => {
  return (
    <HeroSec>
      <Container className="container">
        <div className="hero_text">
          <h1>
          DevOps Services
          </h1>
          <p>
          Need DevOps professional services? Webevis offers DevOps as a Service or as a part of the software development process. We also provide DevOps services which include continuous integration and continuous delivery of software, DevOps automation, release management, maintenance, and support.
          </p>
          <SecondaryButton
          hover="black"
            width="297"
            minWidth="271"
            minheight="40"
            height="50"
            minsize="18"
            radius="12px"
            size="24"
            bg="#fff"
          >
            <label>

            Consult Our Experts
            </label>
          </SecondaryButton>
        </div>
      </Container>
    </HeroSec>
  );
};

export default Hero;
