import React from "react";
import { HeroSec } from "./Hero.style";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";
import Image from "next/image";
import heroImage from "../../../../public/assets/images/ReactNative/heroImage.png"
const Hero = () => {
  return (
    <HeroSec>
      <Container className="container">
        <div className="hero_text">
          <h1>
            React Native App <br /> Development <br /> Company
          </h1>
          <p>
            We deliver end-to-end dynamic cross-platform <br /> apps to empower
            your business.
          </p>
          <SecondaryButton width="300" minWidth="197" minheight="40" minsize="16" height="50" radius="12px" bg="#fff">
            <label>Let’s work together!</label>
          </SecondaryButton>
        </div>
        <div className="hero_image">
            <Image src={heroImage} alt="heroImage"/>
        </div>
      </Container>
    </HeroSec>
  );
};

export default Hero;
