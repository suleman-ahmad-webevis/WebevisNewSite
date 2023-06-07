import React from "react";
import { Container } from "src/components/Container.styles";
import { InterSec, Button, Btn } from "./inter.style";

const Inter = () => {
  return (
    <Container>
      <InterSec>
        <p>Interested?</p>
        <h1>Let's build or improve your digital product</h1>
        <Btn>
          <Button Width="115px"  Fsize="17px"  Height="30px" >Contact Us</Button>
          <Button bg="#434956">Schedule a call</Button>
        </Btn>
      </InterSec>
    </Container>
  );
};

export default Inter;
