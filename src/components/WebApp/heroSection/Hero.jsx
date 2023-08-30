import React from "react";
import { PrimaryButton } from "src/components/Button.styles";
import background from "../../../../public/assets/images/webApp/background.png";
import Image from "next/image";
import { HeroImage, HeroSec, HeroText } from "./Hero.style";
import { Container } from "src/components/Container.styles";

const Hero = () => {
  return (
    <Container>
      <HeroSec>
        <HeroText>
          <h1>Web Application Development Services</h1>
          <p>
            Web application development services provided by Webevis
            Technologies yield benefits to companies of any type or size.
            Customers get killer software products that maximize the value of
            their offerings and increase the profitability of their business.
          </p>
          <PrimaryButton size="24px" width="291" height="51" radius="40px">
            Let’s Get Started
          </PrimaryButton>
        </HeroText>
        <HeroImage>
          <Image src={background} alt="background" />
        </HeroImage>
      </HeroSec>
    </Container>
  );
};

export default Hero;
