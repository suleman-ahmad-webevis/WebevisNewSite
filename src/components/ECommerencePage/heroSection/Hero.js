import React from "react";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import { HeroSec } from "./Hero.style";

const Hero = () => {
  return (
    <HeroSec>
      <Container className="container">
        <div className="text">
          <h1>E-commerce Website Development Services</h1>
          <p>
            From Small Business To Enterprises; We Deliver Fascinating eCommerce
            Website Development Services That Help Grow Your Business & Improve
            The Conversion Rate At Competitive Prices.
          </p>
          <PrimaryButton minWidth="217" minheight="40" minsize="16" width="291" height="50" radius="12px" size="24">
            {" "}
            Talk To Our Experts
          </PrimaryButton>
        </div>
      </Container>
    </HeroSec>
  );
};

export default Hero;
