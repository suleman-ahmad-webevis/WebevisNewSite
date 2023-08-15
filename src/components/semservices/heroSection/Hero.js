import React, { useState } from "react";
import {
  Button,
  FlexOne,
  FlexText,
  Form,
  FormInput,
  FormFlex,
  HeroSection,
  HeroText,
  HeroBtn,
  Toggle,
  ToggleOne,
} from "./Hero.style";
import img1 from "../../semservices/assests/vector.png";
import img2 from "../../semservices/assests/vector1.png";
import img3 from "../../semservices/assests/vectordown.png";
import Image from "next/image";
import tick from "../../../assets/images/Services/SemServices/tick.png";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
const Hero = () => {

  return (
    <HeroSection>
      <Container className="container">
        <HeroText>
          <h2>Reach Your Marketing Goals Faster</h2>
          <h1>
            Grow Your Search  Engine Marketing
          </h1>
          <p>
            Linear growth proposals are crafted by ad and landing  page
            experts who can take your marketing to the next  level. Get a
            free, no-commitment proposal now, and  we&apos;ll show you how
            we can:
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
        
          <FormInput>
            <select name="help" id="help">
              <option value="What Do you Need With Help?">What Do you Need With Help?</option>
              <option value="Get more conversions">Get more conversions</option>
              <option value="Lower my cost per conversion">Lower my cost per conversion</option>
              <option value="Improve my roi">Improve my roi</option>
              <option value="All of the above">All of the above</option>
              <option value="Ohter">Other</option>
            </select>
            <Image src={img3} alt="img3" />
          </FormInput>
          <FormInput>
            <select name="help" id="help">
              <option value="What Do you Need With Help?">What Do you Need With Help?</option>
              <option value="Get more conversions">Get more conversions</option>
              <option value="Lower my cost per conversion">Lower my cost per conversion</option>
              <option value="Improve my roi">Improve my roi</option>
              <option value="All of the above">All of the above</option>
              <option value="Ohter">Other</option>
            </select>
            <Image src={img3} alt="img3" />
          </FormInput>

          <HeroBtn>
            <PrimaryButton width="340.848" height="50" radius="7.271" style={{borderRadius:"8px"}} >
              <label bgText="white" style={{letterSpacing: "0.5px",cursor:"pointer"}}>
                Get A free Proposal
              </label>
            </PrimaryButton>
          </HeroBtn>
        </Form>
      </Container>
    </HeroSection>
  );
};

export default Hero;
