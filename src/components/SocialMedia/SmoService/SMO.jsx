import React from "react";
import {
  AbsoluteSec,
  SMOImage,
  SMOImg,
  SMOtext,
  SmoButton,
  SmoSection,
} from "./SMO.styles";
import mobileImg from "../../../assets/images/SocialMedia/mobile.png";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import arrow from "../../../assets/images/SocialMedia/Arrow.png";

const SMO = () => {
  return (
    <SmoSection>
      <SMOImage>
        <Image src={mobileImg} alt="SocialMedia" />
      </SMOImage>
      <AbsoluteSec>
        <SMOImg>
          <Image src={mobileImg} alt="SocialMedia" />
        </SMOImg>
        <SMOtext>
          <h3>Looking for SMO Services?</h3>
          <h1>Let us optimize your social media accounts!</h1>
          <p>
            Webevis Technologies is a team of SMO experts that aims to help you
            attract the target audience, keep it engaged and build influence.
            With affordable social media services, any business can increase
            brand awareness and build a powerful social presence.{" "}
          </p>
          <SmoButton bg="#2B2C2F">
            Get Started Today
            <Image src={arrow} alt="arrow" />
          </SmoButton>
        </SMOtext>
      </AbsoluteSec>
    </SmoSection>
  );
};

export default SMO;
