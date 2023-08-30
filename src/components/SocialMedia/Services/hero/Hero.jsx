import React from "react";

import { Button } from "src/components/Button.styles";
import Image from "next/image";
import background from "../../../../assets/images/Services/digitalbg.png";
import { HeroSection, HeroText, HeroImage } from "./Hero.styles";
import { PrimaryButton } from "src/components/Button.styles";

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
          <PrimaryButton
            width="205"
            height="50"
            minheight="40"
            size="20"
            minsize="18"
            radius="11px"
          >
            Get a Proposal
          </PrimaryButton>
        </HeroText>
        <HeroImage></HeroImage>
      </HeroSection>
    </>
  );
};

export default Hero;
