import React from "react";
import { Btn, LookFlex, LookImage, LookInside, LookSec, LookText } from "./Look.style";
import Image from "next/image";
import hand from "../../semservices/assests/hand.png";
import { SecondaryButton } from "src/components/Button.styles";
import { Container } from "src/components/Container.styles";
const Look = () => {
  return (
    <LookSec>
      <Container className="container" >
        <LookText>
          <LookFlex>
            <LookImage>
              <Image src={hand} alt="hand" />
            </LookImage>
            <LookInside>
              <h1>Looking to help your project</h1>
              <p>Webevis will help you to solve your project faster.</p>
            </LookInside>
          </LookFlex>
        </LookText>
        <Btn>
          <SecondaryButton bg="#fff" width="300" radius="8px" height="50" color="" >
            {" "}
            <label bgText="linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)">Get Your Free Marketing Plan </label>{" "}
          </SecondaryButton>
        </Btn>
      </Container>
    </LookSec>
  );
};

export default Look;
