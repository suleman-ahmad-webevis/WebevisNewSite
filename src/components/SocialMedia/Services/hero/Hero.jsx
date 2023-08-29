import React from "react";

// import { Button } from "src/components/Button.styles";
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
          {/* <PrimaryButton
            bg="linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"
            color="white"
            margin="0 0 2rem 0"
          >
            Get a Proposal
          </PrimaryButton> */}
          <PrimaryButton
            // onClick={() => setModal(true)}
            width="174"
            height="45"
            weight="500"
            size="18"
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
