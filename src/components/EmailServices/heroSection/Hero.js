import React from "react";
import { HeroImages, HeroSection, HeroText } from "./Hero.style";
import Image from "next/image";
import heroImage from "../../../assets/images/Services/EmailServices/heroImage.png";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
const Hero = () => {
  return (
    <>
      <HeroSection>
        <Container className="container">
          <HeroText>
            <h1>
              email marketing  for big ideas and  Easily
            </h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur. Eget ultricies sit morbi   
              gravida eu risus interdum porta semper.
            </h2>

            <div className="input">
              <input type="text" placeholder="Submit your email here" />
              
              <PrimaryButton bg="#28b781" width="200" height="48" size="16">Get a Free Quote</PrimaryButton>
            </div>
          </HeroText>
          <HeroImages>
            <Image src={heroImage} alt="heroImage" />
          </HeroImages>
        </Container>
      </HeroSection>
    </>
  );
};

export default Hero;
