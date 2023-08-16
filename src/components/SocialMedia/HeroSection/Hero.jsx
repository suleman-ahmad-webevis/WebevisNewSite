import React from "react";
import { HeroImg, HeroSection, HeroText } from "./Hero.styles";
import { Button } from "src/components/Button.styles";
import bg from "../../../assets/images/SocialMedia/socialbg.png";
import line from "../../../assets/images/SocialMedia/textLine.png";

import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroText>
        <h1>Social Media Marketing</h1>
        {/* <Image src={line} title="Vector" alt="" /> */}

        <p>
          With our top-notch social media marketing plan and campaign monitoring
          system, social media content marketing can lead to increased search
          traffic, better SEO, healthier customer engagement, and improved brand
          loyalty.
        </p>
        <PrimaryButton
          color="white"
          width="334"
          minWidth="350"
          height="50"
          minheight="40"
          radius="4px"
        >
          Get Your Free Custom Proposal
        </PrimaryButton>
      </HeroText>
      <HeroImg>
        <Image src={bg} alt="bg" />
      </HeroImg>
    </HeroSection>
  );
};

export default Hero;
