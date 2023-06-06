import React from "react";
import {
  HeroSec,
  HeroText,
  Button,
  Btn,
  HeroImages,
  ResponsiveImage,
  HeroDash,
} from "./heroSectionStyles";
import HeroBG from "../../../assets//images/Services/youtubeMarketting/HeroBG.png";
import Image from "next/image";
const heroSection = () => {
  return (
    <HeroSec>
      <HeroText>
        <h1>YouTube Marketing Services</h1>
        <p>
          Grow your Brand with Quality Videos that Engage More Viewers Market to
          the Right Audience
        </p>
        <p>
          Webevis Technologies is a trusted YouTube advertising agency in that
          provides you direct services for YouTube marketing to add value to
          your business with the trending concept
        </p>
        <Btn>
          <Button
            Width="60%"
            Bg="linear-gradient(
    110.26deg,
    rgba(12, 145, 204, 0.82) -1.17%,
    rgba(2, 185, 128, 0.87) 60.57%
  );"
          >
            Get a quote
          </Button>
          <Button Width="90%" Color="#06A172"  Responsive="70%" Border="2px solid #06A172">
            Hire Dedicated Talent
          </Button>
        </Btn>
      </HeroText>
      <HeroImages>
        <Image src={HeroBG} alt="" />
      </HeroImages> 
    </HeroSec>
  );
};

export default heroSection;
