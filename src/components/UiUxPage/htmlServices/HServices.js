import React from "react";
import { HtmlSec } from "./HServices.style";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
import speed from "../../../../public/assets/images/uiPage/speed.png";
import earth from "../../../../public/assets/images/uiPage/earth.png";
import Image from "next/image";

const HServices = () => {
  return (
    <Container className="container">
      <HtmlSec>
      
          <div className="text">
            <h3>
              What’s Included in <br /> PSD to HTML Service?
            </h3>
            <p>
              We provide world-class service of PSD <br /> to HTML conversion by
              optimizing the <br /> performance finely and leveraging the <br />{" "}
              latest technology.
            </p>
            <PrimaryButton width="255" minWidth="167" minsize="16" minheight="40" height="50" radius="6px" size="24">
              Free Estimate
            </PrimaryButton>
          </div>
          <div className="parent">
            <div className="card">
              <Image src={speed} alt="speed" />
              <h5>Performance</h5>
              <h4>Well Commented HTML & CSS</h4>
              <h4>Google Analytics Setup</h4>
              <h4>CSS sprite</h4>
              <h4>High GTmetrics & Web.dev Score</h4>
              <h4>
                Cross-Browser/Device <br /> Compatible
              </h4>
            </div>
            <div className="card1">
              <Image src={earth} alt="earth" />
              <h5>Technology</h5>
              <h4>Mobile-Optimized</h4>
              <h4>Font Awesome</h4>
              <h4>jQuery framework</h4>
              <h4>SEO Semantic Coding</h4>
              <h4>Hamburger menu</h4>
            </div>
          </div>
      </HtmlSec>
    </Container>
  );
};

export default HServices;
