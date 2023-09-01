import React from "react";
import { HeroImage, HeroSec, HeroText } from "./Hero.style";
import heroImage from "../../../../public/assets/images/uiPage/heroImage.png";
import Image from "next/image";
import { SecondaryButton } from "src/components/Button.styles";
import { Container } from "src/components/Container.styles";

const Hero = () => {
  return (
    <HeroSec>
      <Container className="container">
        <HeroText>
          <h1>
            We Convert PSD to HTML <br/> at Top Speed to Let Your <br/> Business Grow Faster
          </h1>
          <p>
            We provide ETAs and quotes with pinpoint accuracy. <br/> This way your
            projects are delivered right on time and <br/> fully meet your
            requirements.
          </p>
          <SecondaryButton size="24" width="218" height="50" minWidth="163" minHeight="40" minsize="16" bg="#fff">
            <label>Hire Now</label>
          </SecondaryButton>
        </HeroText>
        <HeroImage>
          <Image src={heroImage} alt="heroImage" />
        </HeroImage>
      </Container>
    </HeroSec>
  );
};

export default Hero;
