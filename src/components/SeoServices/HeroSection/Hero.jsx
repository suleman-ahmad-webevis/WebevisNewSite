import React from "react";
import { Cta, HeroImg, HeroMain, HeroText } from "./Hero.style";
import mainImage from "../../../assets/images/seoservices/mainbg.png";
import backgroungimg from "../../../assets/images/seoservices/backgroungimg.png";
import Image from "next/image";
import { Button } from "../Offers/Offer.styles";

const Hero = () => {
  return (
    <HeroMain>
      <HeroText>
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
          <button>Get Your Report</button>
        </Cta>
      </HeroText>
      <HeroImg>
        <Image src={mainImage} alt="" className="img1" />
        <Image src={backgroungimg} alt="" className="img2" />
      </HeroImg>
    </HeroMain>
  );
};

export default Hero;
