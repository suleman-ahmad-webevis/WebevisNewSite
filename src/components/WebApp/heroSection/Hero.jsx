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
          <h1>Web Application <br />  Development <br />  Services</h1>
          <p>
            Web application development services provided by <br />  Webevis
            Technologies yield benefits to companies of <br />  any type or size.
            Customers get killer software <br />  products that maximize the value of
            their offerings <br />  and increase the profitability of their business.
          </p>
          <PrimaryButton size="24" width="291" height="51" minWidth="217" radius="40px" minsize="16" >
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
