import React, { useState } from "react";
import {
  Button,
  FlexOne,
  FlexText,
  Form,
  FormClass,
  FormFlex,
  HeroSection,
  HeroText,
  Toggle,
  ToggleOne,
} from "./Hero.style";
import img1 from "../../semservices/assests/vector.png";
import img2 from "../../semservices/assests/vector1.png";
import img3 from "../../semservices/assests/vectordown.png";
import Image from "next/image";
import tick from "../../../assets/images/Services/SemServices/tick.png";

import { Container } from "src/components/Container.styles";
const Hero = () => {
  const [click, setClick] = useState();
  const [click1, setClick1] = useState();
  const handleClick = () => {
    setClick(!click);
  };
  const handleClickOne = () => {
    setClick1(!click1);
  };
  return (
    <HeroSection>
      <Container className="container">
        <HeroText>
          <h2>REACH YOUR MARKETING GOALS FASTER</h2>
          <h1>Grow Your Search Engine Marketing</h1>
          <p>
            Linear growth proposals are crafted by ad and landing page experts
            who can take your marketing to the next level. Get a free,
            no-commitment proposal now, and we&apos;ll show you how we can:
          </p>
          <FlexText>
            <FlexOne>
              <Image src={tick} alt="tick" />{" "}
              <span>Make the most of your advertising dollars</span>
            </FlexOne>
            <FlexOne>
              <Image src={tick} alt="tick" />
              <span>Increase leads and sales</span>
            </FlexOne>
            <FlexOne>
              <Image src={tick} alt="tick" />
              <span>Improve conversion rates</span>
            </FlexOne>
          </FlexText>
        </HeroText>
        {/* this is form section in the website */}
        <Form>
          <h1>We&apos;ve got a plan for you.</h1>
          <FormFlex>
            <Image src={img2} alt="img" />
            <p>Personalized plan & pricing, No commitment required</p>
          </FormFlex>
          <FormClass>
            <input type="text" placeholder="What Do you Need With Help?" />
            <button onClick={handleClick}>
              <Image src={img3} alt="img" />
            </button>
          </FormClass>
          {click ? (
            <>
              <Toggle>
                <small>What Are Your Goals?</small>
                <small>Get more conversions</small>
                <small>Lower my cost per conversion</small>
                <small>Improve my roi</small>
                <small>All of the above</small>
                <small>Other</small>
              </Toggle>
            </>
          ) : (
            ""
          )}
          <FormClass>
            <input type="email" placeholder="What Are Your Goals?" />
            <button onClick={handleClickOne}>
              <Image src={img3} alt="img" />
            </button>
          </FormClass>

          {click1 ? (
            <>
              <ToggleOne>
                <small>What Are Your Goals?</small>
                <small>Get more conversions</small>
                <small>Lower my cost per conversion</small>
                <small>Improve my roi</small>
                <small>All of the above</small>
                <small>Other</small>
              </ToggleOne>
            </>
          ) : (
            ""
          )}
          <Button>Get A free Proposal</Button>
        </Form>
      </Container>
    </HeroSection>
  );
};

export default Hero;
