import React from "react";

import { Button } from "src/components/Button.styles";
import Image from "next/image";
import background from "../../../../assets/images/Services/digitalbg.png";
import { HeroSection, HeroText, HeroImage } from "./Hero.styles";

const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroText>
          <h1>Digital Marketing Services</h1>
          <p>
            Professional USA agency offering honest, bespoke, multi-channel
            digital marketing services to a range of small and large private and
            public companies.
          </p>
          <Button
            bg="linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%)"
            color="white"
            margin="0 0 2rem 0"
          >
            Get a Proposal
          </Button>
        </HeroText>
        <HeroImage></HeroImage>
      </HeroSection>
    </>
  );
};

export default Hero;
