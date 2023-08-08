import React from "react";
import { Button, LookFlex, LookInside, LookSec, LookText } from "./Look.style";
import Image from "next/image";
import hand from "../../semservices/assests/hand.png";
const Look = () => {
  return (
    <LookSec>
      <LookText>
        <LookFlex>
          <Image src={hand} alt="img" />
          <LookInside>
            <h1>Looking to help your project</h1>
            <p>WEBEVIS will help you to solve your project faster.</p>
          </LookInside>
        </LookFlex>
      </LookText>
      <Button>
        {" "}
        <label>Get Your Free Marketing Plan </label>{" "}
      </Button>
    </LookSec>
  );
};

export default Look;
