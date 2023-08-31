import React from "react";
import { AboutImage, AboutSec, AboutText, AboutWrapper } from "./Hero.style";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
// import bg from "../../../assets/images/AboutUs/bgresponsive.png";
// import mobile from "../../../assets/images/AboutUs/bgrep.png";

import Image from "next/image";
const aboutUs = ({ pageProps }) => {
  return (
    <AboutSec>
      <AboutWrapper>
        <AboutText>
          <h1>Digital Marketing Services</h1>
          <p>
            Professional USA agency offering honest, bespoke, multi-channel digital marketing services to a range of small and large private and public companies.
          </p>
          <PrimaryButton
            radius="6px"
            width="260"
            minWidth="235"
            height="60"
            minheight="40"
            size="18"
            minsize="16"
          >
            Get a Poposal
          </PrimaryButton>
        </AboutText>
        {/* <AboutImage>
          <Image src={bg} alt="bg" className="laptop" />
          <Image src={mobile} alt="bg" className="mobile" />
        </AboutImage> */}
      </AboutWrapper>
    </AboutSec>
  );
};
export default aboutUs;
