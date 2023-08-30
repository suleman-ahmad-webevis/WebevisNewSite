import React from "react";
import { HeroSec, HeroText, HeroImages } from "./heroSectionStyles";
import HeroBG from "../../../../public/assets/images/youtubeMarketting/youtubemain.png";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
const heroSection = () => {
  return (
    <HeroSec>
      <Container className="container">
        <HeroText>
          <h1>YouTube Marketing Services</h1>

          <p>
            Grow your Brand with Quality Videos that Engage More Viewers Market
            to the Right Audience Webevis Technologies is a trusted YouTube
            advertising agency in that provides you direct services for YouTube
            marketing to add value to your business with the trending concept.
          </p>
          <PrimaryButton
            width="150"
            height="50"
            minheight="40"
            size="18"
            radius="12px"
            weight="400"
          >
            Get a quote
          </PrimaryButton>
        </HeroText>
        <HeroImages>
          <Image src={HeroBG} alt="bg" />
        </HeroImages>
      </Container>
    </HeroSec>
  );
};

export default heroSection;
