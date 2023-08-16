import React from "react";
import { AboutImage, AboutSec, AboutText, AboutWrapper } from "./Hero.style";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import bg from "../../../assets/images/AboutUs/bgresponsive.png";
import mobile from "../../../assets/images/AboutUs/bgrep.png";

import Image from "next/image";
import Link from "next/link";
const aboutUs = ({ pageProps }) => {
  return (
    <AboutSec>
      <AboutWrapper>
        <AboutText>
          <h1>Empowering Success Through Results</h1>
          <p>
            Webevis is a leading software development company delivering
            exceptional web and mobile application services globally. With a
            dedicated team of IT professionals and industry-experienced
            developers, we excel in complex IT solutions. Beyond development, we
            offer end-to-end business solutions, including digital marketing,
            web and app development, customer service, and more— partner with us
            to transform your ideas into successful products.
          </p>
          <Link href="/expert-pool">
            <PrimaryButton
              radius="6px"
              width="260"
              minWidth="235"
              height="60"
              minheight="40"
              size="18"
              minsize="16"
            >
              Experience Excellence With Us
            </PrimaryButton>
          </Link>
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
