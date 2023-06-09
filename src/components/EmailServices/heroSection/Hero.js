import React from "react";
import { HeroImages, HeroSection, HeroText, Button,Btns } from "./Hero.style";
import Image from "next/image";
import img1 from "../../EmailServices/assests/heroImage.png";
const Hero = () => {
  return (
    <>
      <HeroSection>
        <HeroText>
          <h1>Email Marketing Services</h1>
          <h2>
            Gain new leads & re-engage past customers with one of London’s
            longest-standing email marketing agencies
          </h2>
          <h2>
            Email marketing – when done right – is a powerful tool for keeping
            customers engaged and building your brand. After all, 89% of
            marketers use email as the main method for generating leads.
          </h2>
          <h2>
            This is why we don’t do generic. We craft email campaigns that turn
            heads, deliver the highest response rates and amplify your ROI.
          </h2>
          <Btns>
            <Button
              padding="10px 0px"
              bg={"linear-gradient(93.39deg, #28b781 21.84%, #cfef00 178.39%)"}
              width="40%"
              Color="#ffffff"
            >
              Start Your Project
            </Button>
            <Button
              padding="10px 0px"
              width="40%"
              Border="1px solid #28B781"
              Color="#28B781"
            >
              Hire Dedicated Talent
            </Button>
          </Btns>
        </HeroText>
        <HeroImages>
          <Image src={img1} alt="img" />
        </HeroImages>
      </HeroSection>
    </>
  );
};

export default Hero;
