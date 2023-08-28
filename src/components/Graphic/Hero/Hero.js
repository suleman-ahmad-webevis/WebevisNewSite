import React from "react";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import GraphicImg from "../../../assets/images/Graphic/hero-img.png";
import Image from "next/image";
import { Content, ContentHolder, HeroHolder, ImageHolder } from "./Hero.styles";

const Hero = () => {
  return (
    <HeroHolder>
      <Container>
        <ContentHolder>
          <Content>
            <h1>
              Fast & Effective <br /> <span>Graphic Design.</span> <br /> Flat &
              Affordable
              <br />
              Rates.
            </h1>
            <p>
              The benefits of a hands-on design team are now at your fingertips.
              Our dedicated experts aim to deliver you high-quality designs in
              record time, at a fraction of the price.
            </p>
            <PrimaryButton width="266" height="50" size="24" radius="100px">
              Let’s Get Started
            </PrimaryButton>
          </Content>
          <ImageHolder>
            <Image src={GraphicImg} alt="GraphicImg" />
          </ImageHolder>
        </ContentHolder>
      </Container>
    </HeroHolder>
  );
};

export default Hero;
