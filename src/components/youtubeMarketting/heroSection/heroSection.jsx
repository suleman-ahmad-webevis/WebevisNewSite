import React from "react";
import { HeroSec, HeroImage, HeroText, Button } from "./heroSectionStyles";
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
        <Button className="btn">Get a quote</Button>
        <Button>Hire Dedicated Talent</Button>
      </HeroText>
      <HeroImage>
        <Image src={HeroBG} alt="" />
      </HeroImage>
    </HeroSec>
  );
};

export default heroSection;
