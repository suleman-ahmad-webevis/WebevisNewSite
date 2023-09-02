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
            We Convert PSD to HTML at Top Speed to Let Your Business Grow Faster
          </h1>
          <p>
            We provide ETAs and quotes with pinpoint accuracy. This way your
            projects are delivered right on time and fully meet your
            requirements.
          </p>
          <SecondaryButton>
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
