import React from "react";
import { Container } from "src/components/Container.styles";
import { Flex } from "src/components/Flex.styles";
import { Touch, HeroImage, HeroText, HeroInfo, Info } from "./Hero.styles";
import location from "../../../assets/images/ContactUs/location-pin.svg";
import email from "../../../assets/images/ContactUs/Email-icon.svg";
import phone from "../../../assets/images/ContactUs/phone-icon.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <Touch>
      <Container resPadding="0px">
        <Flex>
          <HeroImage>
            <HeroText>
              <h6>Get In Touch</h6>
              <h3>Don't hesitate to contact us for more information.</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </HeroText>
            <hr />
            <HeroInfo>
              <li>
                <div className="icon-box">
                  <Image src={location} alt="location Pin" />
                </div>
                <div className="text-box">
                  <h6>Head Office</h6>
                  <span className="text">
                    600 N board street suit 5# 3260 middletown DE 19709
                  </span>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <Image src={email} alt="location Pin" />
                </div>
                <div className="text-box">
                  <h6>Email Us</h6>{" "}
                  <span className="text">info@webevis.com</span>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <Image src={phone} alt="location Pin" />
                </div>
                <div className="text-box">
                  <h6>Call us</h6>
                  <span className="text">
                    +1 (302) 315-3301 <br />
                    +1 (857) 208-7832
                  </span>
                </div>
              </li>
            </HeroInfo>
          </HeroImage>
        </Flex>
      </Container>
    </Touch>
  );
};

export default Hero;
