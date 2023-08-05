import React from "react";
import { Cta, HeroImg, HeroMain, HeroText } from "./Hero.style";
import mainImage from "../../../assets/images/seoservices/mainbg.png";
import backgroungimg from "../../../assets/images/seoservices/backgroungimg.png";
import Image from "next/image";
import { Button } from "../Offers/Offer.styles";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";

const Hero = () => {
  return (
    <HeroMain>
      <Container>
        <HeroText>
          <div>
            <h1>GET SEO SERVICES THAT DRIVE RESULTS</h1>
            <p>
              EO boost is here to help you with all you SEO requirments. Get top
              ranking on Google with our premium SEO services. Check out our
              packages to learn more or give us a call and let us help you!
            </p>
            <Cta>
              <input type="text" placeholder="Your website URL" />
              <input type="email" placeholder="Email address" />
              <input type="text" placeholder="Phone No" />
              <SecondaryButton>
                <label>Get Your Report</label>
              </SecondaryButton>
            </Cta>
          </div>
        </HeroText>
      </Container>
    </HeroMain>
  );
};

export default Hero;
