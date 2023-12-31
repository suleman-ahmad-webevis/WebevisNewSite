import React from "react";
import { AboutImage, AboutSec, AboutText, AboutWrapper } from "./Hero.style";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import bg from "../../../../public/assets/images/AboutUs/bgresponsive.png";
import mobile from "../../../../public/assets/images/AboutUs/bgrep.png";

import Image from "next/image";
import Link from "next/link";
const aboutUs = ({ pageProps }) => {
  return (
    <AboutSec>
      <AboutWrapper>
        <AboutText>
          <h1>Empowering Success Through Results</h1>
          <p>
            Webevis is one of leading software development company delivering
            exceptional web and mobile application services globally. With a
            dedicated team of IT professionals and industry-experienced
            developers, we excel in complex IT solutions. Beyond development, we
            offer end-to-end business solutions, including digital marketing,
            customer service, and much more. Partner with us to transform your
            ideas into successful products.
          </p>
          <Link href="/expert-pool">
            <PrimaryButton
              radius="6px"
              width="300"
              minWidth="250"
              height="60"
              minheight="40"
              size="16"
              minsize="14"
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
