import React from "react";
import Image from "next/image";
import { HeroText, HeroSec, ImageContainer } from "./HeroSectionStyles";
import heroAduit from "../../../assets/images/Services/AWAServices/heroAduit.png";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";

const HeroSection = () => {
  return (
    <HeroSec>
      <Container className="container">
        <HeroText>
          <h2>AI Website Audit</h2>
          <p>
            Your online presence, whether in the B2B or B2C   space, is the face
            of your company, and   understanding the nuances of the functional
            areas and components of a website&apos;s performance is critical.
          </p>
          <SecondaryButton width="356" minWidth="256" height="50" bg="#ffffff" size="24" minsize="16" minheight="40" radius="40px">
            {" "}
            <label>Get Your Free Ai Audit</label>
          </SecondaryButton>
        </HeroText>
        <ImageContainer>
          <Image src={heroAduit} alt="heroAduit" />
        </ImageContainer>
      </Container>
    </HeroSec>
  );
};

export default HeroSection;
