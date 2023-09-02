import React from "react";
import { ContentHolder, HeroHolder } from "./Hero.styles";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";

const Hero = () => {
  return (
    <HeroHolder>
      <Container>
        <ContentHolder>
          <div>
            <h2>
              <span className="Text-gradient">Web Application</span> Development
              Services
            </h2>
            <p>
              Web application development services provided by Webevis
              Technologies yield benefits to companies of any type or size.
              Customers get killer software products that maximize the value of
              their offerings and increase the profitability of their business.
            </p>
            <PrimaryButton width="291" size="24px" weight="700" radius="100px">
              Let’s Get Started
            </PrimaryButton>
          </div>
        </ContentHolder>
      </Container>
    </HeroHolder>
  );
};

export default Hero;
