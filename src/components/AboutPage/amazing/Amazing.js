import React from "react";
import { Container } from "src/components/Container.styles";
import { Amazon, LastHeading, Button } from "./Amazing.style";
const Amazing = () => {
  return (
    <Amazon>
      <Container>
        <LastHeading>
        <h1>Lets Build Something Amazing Together</h1>
        <Button>Contact Now</Button>
        </LastHeading>
      </Container>
    </Amazon>
  );
};

export default Amazing;
