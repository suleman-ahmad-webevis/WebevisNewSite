import React from "react";
import { HeroHolder } from "./Hero.styles";
import { Container } from "src/components/Container.styles";
import { HeroContent } from "./Hero.styles";
import { PrimaryButton } from "src/components/Button.styles";
import HeroImg from "../../../../public/assets/images/UI-UX/Hero-img.png";

import Image from "next/image";

const Hero = () => {
  return (
    <HeroHolder>
      <div className="BG"></div>
      <Container>
        <HeroContent>
          <div className="Content">
            <h1>
              Business-Driven <br />{" "}
              <span className="Text-gradient">UI/UX Design </span> <br />
              Services
            </h1>
            <p>
              We are specialized in creating beautiful and smooth UI/UX designs
              that provide better user experience by incorporating effective
              collaboration, streamlined projects which strive for better
              results.
            </p>
            <PrimaryButton
              width="297"
              minWidth="210"
              height="50"
              minheight="40"
              size="24"
              minsize="18"
            >
              Consult Our Expert
            </PrimaryButton>
          </div>
          <div className="mobile-bg">
            <div className="img-holder">
              <Image src={HeroImg} alt="HeroImg" />
            </div>
          </div>
          {/* <div className="mobile-img">
            <Image src={MobileBg} alt="HeroImg" />
          </div> */}
        </HeroContent>
      </Container>
    </HeroHolder>
  );
};

export default Hero;
