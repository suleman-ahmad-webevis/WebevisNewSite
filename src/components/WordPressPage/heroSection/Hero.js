import React from "react";
import { HeroSec } from "./Hero.style";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import heroImage from "../../../../public/assets/images/wordPressPage/heroImage.png"
import Image from "next/image";
import { LiaGreaterThanSolid } from "react-icons/lia";
const Hero = () => {
  return (
    <HeroSec>
      <Container className="container">
        <div className="hero_text">
          <h1><span className="Text-gradient"> WordPress </span> Development Services</h1>
          <p>
            Our Custom WordPress Development Services Can Be The One-Stop
            Solution For All Your Development Needs. Hire Cost-Effective
            WordPress Web Development Solutions For Your Business Needs.
          </p>
          <PrimaryButton width="227" minWidth="138"   minheight="40"  height="50" minsize="18" radius="12px" size="24">
            Get In Touch <LiaGreaterThanSolid/>
          </PrimaryButton>
        </div>
        <div className="hero_image">
            <Image src={heroImage} alt="heroImage"/>
        </div>
      </Container>
    </HeroSec>
  );
};

export default Hero;
