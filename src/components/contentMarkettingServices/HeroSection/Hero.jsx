import React from 'react'
import {
  HeroContainer,
  HeroContainerMobile,
  Button,
  HeroText,
} from "./Hero.style";
import { Container } from "src/components/Container.styles";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Container className="container">
          <HeroText>
            <h2>
              Content Marketing <br />
              Services That <br />
              Change Your <br />
              Content Game
            </h2>
            <p>
              Build trust and credibility through helpful <br />
              content that&apos;s centered around your audience <br />
              (not your brand).
            </p>
            <Button>
              <label>Find A Time To Talk</label>
            </Button>
          </HeroText>
        </Container>
      </HeroContainer>
    </>
  );
};

export default Hero
