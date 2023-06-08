import React from "react";
import { Button, LookFlex, LookInside, LookSec, LookText } from "./Look.style";
import Image from "next/image";
import hand from "../../semservices/assests/hand.png";
const Look = () => {
  return (
    <LookSec>
      <LookText>
        <LookFlex>
<<<<<<< HEAD
          <Image src={hand} />
          <LookInside>
          <h1>Looking to help your project</h1>
          <p>WEBEVIS will help you to solve your project faster.</p>
=======
          <Image src={hand} alt="img" />
          <LookInside>
            <h1>Looking to help your project</h1>
            <p>WEBEVIS will help you to solve your project faster.</p>
>>>>>>> a03ceb0f07e1c0d0952dd8ae02d85b415f36951c
          </LookInside>
        </LookFlex>
      </LookText>
      <Button>Get Your Free Marketing Plan</Button>
    </LookSec>
  );
};

export default Look;
