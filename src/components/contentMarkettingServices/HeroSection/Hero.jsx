import React from 'react'
import {
  HeroContainer,
  HeroContainerMobile,
  Button,
  HeroText,
  HeroImage,
  AbsoluteImage,
} from "./Hero.style";
import { Container } from "src/components/Container.styles";
import person from "../../../assets/images/Services/ContentMarkettingServices/contentImg.png";
import Circle from "../../../assets/images/Services/ContentMarkettingServices/circles.svg";
import Image from "next/image";
import { PrimaryButton } from "src/components/Button.styles";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Container className="container">
          <HeroText>
            <h2>Content Marketing Services</h2>
            <p>
              Build trust and credibility through helpful content that&apos;s
              centered around your audience (not your brand).
            </p>
            <PrimaryButton
              height="50"
              minheight="40"
              size="18"
              minsize="16"
              width="260"
              minwidth="200"
              radius="47px"
            >
              Find A Time To Talk
            </PrimaryButton>
          </HeroText>
          <HeroImage>
            <Image src={person} alt="person" />
          </HeroImage>
          <AbsoluteImage
            top="150px"
            right="40%"
            top1="50px"
            right1="50%"
            top2="45%"
            right2="20%"
          >
            <Image src={Circle} alt="Circle" />
          </AbsoluteImage>
          <AbsoluteImage
            top="0px"
            right="10%"
            rotate="40deg"
            top1="-10%"
            right1="10%"
            top2="60%"
            right2="60%"
          >
            <Image src={Circle} alt="Circle" />
          </AbsoluteImage>
          <AbsoluteImage
            top="85%"
            right="60%"
            rotate="60deg"
            top1="85%"
            right1="60%"
            top2="50%"
            right2="70%"
          >
            <Image src={Circle} alt="Circle" />
          </AbsoluteImage>
        </Container>
      </HeroContainer>
    </>
  );
};

export default Hero
