import React from "react";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import GraphicImg from "../../../assets/images/Graphic/hero-img.png";
import Image from "next/image";
import { ContentHolder, HeroHolder, ImageHolder } from "./Hero.styles";

const Hero = () => {
  return (
    <HeroHolder>
      <Container>
        <ContentHolder>
          <h1>
            Fast & Effective <span>Graphic Design.</span> Flat & Affordable
            Rates.
          </h1>
          <p>
            The benefits of a hands-on design team are now at your fingertips.
            Our dedicated experts aim to deliver you high-quality designs in
            record time, at a fraction of the price.s
          </p>
          <PrimaryButton width="266px" height="50px">
            Let’s Get Started
          </PrimaryButton>
        </ContentHolder>
        <ImageHolder>
          <Image src={GraphicImg} alt="GraphicImg" />
        </ImageHolder>
      </Container>
    </HeroHolder>
  );
};

export default Hero;
