import Image from "next/image";

import { HeroImage, HeroText, MainSection } from "./Hero.styles";
import Bg from "../../../assets/images/Services/backgroundHero.png";
import Heromain from "../../../assets/images/Services/Heromain.png";
import { Button } from "../Button.style";

const Hero = () => {
  return (
    <MainSection image={Bg}>
      <HeroText>
        <h2>Our Services</h2>
        <p>
          Webevis Technology is a major digital marketing agency in the United
          States, specializing in digital marketing, graphic design, mobile app
          development, CRM/ERP development, CMS development, and other related
          services.
        </p>
        <Button href="/">Contact Us</Button>
      </HeroText>
      <HeroImage>
        <Image src={Heromain} alt="main" />
      </HeroImage>
    </MainSection>
  );
};

export default Hero;
