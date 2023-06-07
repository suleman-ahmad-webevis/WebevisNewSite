import React from "react";
import { HeroImg, HeroSection, HeroText } from "./Hero.styles";
import { Button } from "src/components/Button.styles";
import bg from "../../../assets/images/SocialMedia/socialbg.png";
import line from "../../../assets/images/SocialMedia/textLine.png";

import Image from "next/image";

const Hero = () => {
  return (
    <HeroSection>
      <HeroText>
        <h1>Social Media Marketing</h1>
        <Image src={line} title="Vector" alt="" />

        <p>
          With our top-notch social media marketing plan and campaign monitoring
          system, social media content marketing can lead to increased search
          traffic, better SEO, healthier customer engagement, and improved brand
          loyalty.
        </p>
        <Button
          bg="linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%)"
          color="white"
          margin="0 0 2rem 0"
        >
          Get Your Free Custom Proposal
        </Button>
      </HeroText>
      <HeroImg>
        <Image src={bg} alt="bg" />
      </HeroImg>
    </HeroSection>
  );
};

export default Hero;
