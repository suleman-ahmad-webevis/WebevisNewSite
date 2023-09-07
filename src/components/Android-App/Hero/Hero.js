import React from "react";
import { HeroContent, HeroHolder } from "./Hero.styles";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import HeroImg from "../../../../public/assets/images/Android-App/Hero-img.png";
import Image from "next/image";

const Hero = () => {
  return (
    <HeroHolder>
      <Container>
        <HeroContent>
          <div className="Content">
            <h1>
              <span className="Text-gradient">Android App</span> Development
              Company
            </h1>
            <p>
              Unlock the hidden potential of data to drive tangible business
              results – and do it faster than you’d expect
            </p>
            <PrimaryButton
              width="200"
              minwidth="133"
              height="50"
              minheight="40"
              size="24"
              minsize="18"
            >
              Get Started
            </PrimaryButton>
          </div>
          <div className="img-holder">
            <Image src={HeroImg} alt="HeroImg" />
          </div>
        </HeroContent>
      </Container>
    </HeroHolder>
  );
};

export default Hero;
