import React from "react";
import { SecondaryButton } from "src/components/Button.styles";
import { Container } from "src/components/Container.styles";
import { SightSec } from "./Sight.style";

const Sight = () => {
  return (
    <SightSec>
      <Container className="container">
        <h3>
          Want to leverage AI to drive growth? Get your FREE expert AI {" "}
          recommendations now.
        </h3>
        <SecondaryButton width="198" height="50" minWidth="159" minheight="40" bg="#fff" minsize="18" radius="12px" size="24">
          <label>Get AI Insight</label>
        </SecondaryButton>
      </Container>
    </SightSec>
  );
};

export default Sight;
