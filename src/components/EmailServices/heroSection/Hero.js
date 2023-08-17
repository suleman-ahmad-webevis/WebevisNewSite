import React from "react";
import { HeroImages, HeroSection, HeroText, Button, Btns } from "./Hero.style";
import Image from "next/image";
import heroImage from "../../../assets/images/Services/EmailServices/heroImage.png";
import { Container } from "src/components/Container.styles";
const Hero = () => {
  return (
    <>
      <HeroSection>
        <Container className="container">
          <HeroText>
            <h1>
              email marketing <br/> for big ideas and <br/> Easily
            </h1>
            <h2>
              Lorem ipsum dolor sit amet consectetur. Eget ultricies sit morbi 
              gravida eu risus interdum porta semper.
            </h2>

            <div className="input">
              <input type="text" placeholder="Submit your email here" />
              <button>Get a Free Quote</button>
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
