import React from "react";
import { AboutImage, AboutSec, AboutText, AboutWrapper } from "./Hero.style";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import bg from "../../../assets/images/AboutUs/bgresponsive.png";
import mobile from "../../../assets/images/AboutUs/bgrep.png";

import Image from "next/image";
const aboutUs = ({ pageProps }) => {
  return (
    <AboutSec>
      <AboutWrapper>
        <AboutText>
          <h1>We&apos;re a Result Driven Team</h1>
          <p>
            Welcome to Webevis a leading digital marketing agency dedicated to
            driving results for businesses like yours. With a team of
            experienced professionals and a passion for all things digital, we
            are here to transform your online presence,boost your brand
            visibility, and help you achieve your business goals.
          </p>
          <PrimaryButton
            radius="6px"
            width="255"
            minWidth="229"
            height="60"
            minheight="40"
            size="18"
            minsize="16"
          >
            Reach Your Goals with Us
          </PrimaryButton>
        </AboutText>
        <AboutImage>
          <Image src={bg} alt="bg" className="laptop" />
          <Image src={mobile} alt="bg" className="mobile" />
        </AboutImage>
      </AboutWrapper>
    </AboutSec>
  );
};
export default aboutUs;
