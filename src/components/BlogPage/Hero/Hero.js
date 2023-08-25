import React from "react";

import { Container } from "src/components/Container.styles";
import {
  Blog,
  BtnHolder,
  HeroImage,
  HeroParent,
  HeroSec,
  Input,
  InputIcon,
  Popular,
} from "./Hero.styles";
import { PrimaryButton } from "src/components/Button.styles";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import HeroPic from "../../../assets/images/Blog/hero-pic.png";

const Hero = () => {
  return (
    <Blog>
      <Container>
        <HeroParent>
          <HeroSec>
            <h1>
              Diving Deep Into
              <br /> Topics That Matter
            </h1>
            <p>
              Navigate a world of ideas and knowledge through our insightful
              blog posts.
            </p>
            <Input>
              <InputIcon>
                <BiSearch color={"#959EAD"} />
                <input type="text" placeholder="Search article" />
              </InputIcon>
              <PrimaryButton
                radius="10px"
                width="94"
                height="40"
                size="16"
                weight="700"
              >
                Search
              </PrimaryButton>
            </Input>
            <Popular>
              <span>Popular Tags :</span>
              <BtnHolder>
                <PrimaryButton
                  radius="4px"
                  bg="#D7F1E3"
                  color="#28B781"
                  width="82"
                  minWidth="59"
                  height="32"
                  size="14"
                  minsize="12"
                  weight="600"
                  hover="#D7F1E3"
                  shadowH="none"
                >
                  Design
                </PrimaryButton>
                <PrimaryButton
                  radius="4px"
                  bg="#D7F1E3"
                  color="#28B781"
                  width="146"
                  minWidth="126"
                  height="32"
                  size="14"
                  weight="600"
                  hover="#D7F1E3"
                  shadowH="none"
                >
                  Development
                </PrimaryButton>
                <PrimaryButton
                  radius="4px"
                  bg="#D7F1E3"
                  color="#28B781"
                  width="93"
                  minWidth="61"
                  height="32"
                  size="14"
                  weight="600"
                  hover="#D7F1E3"
                  shadowH="none"
                >
                  SEO
                </PrimaryButton>
              </BtnHolder>
            </Popular>
          </HeroSec>
          <HeroImage>
            <Image src={HeroPic} alt="HeroPic" />
          </HeroImage>
        </HeroParent>
      </Container>
    </Blog>
  );
};

export default Hero;
