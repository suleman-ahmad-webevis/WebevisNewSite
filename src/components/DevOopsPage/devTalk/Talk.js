import React from "react";
import { TalkSec } from "./Talk.style";
import { SecondaryButton } from "src/components/Button.styles";
import { Container } from "src/components/Container.styles";

const Talk = () => {
  return (
    <Container >
      <TalkSec>
        <h3>
          Ready to Save Time, Budget, and Resources with a DevOps-driven
          Solution?
        </h3>
        <SecondaryButton
        hover="black"
          width="263"
          height="60"
          bg="#fff"
          size="24"
          minwidth="190"
          minheight="40"
          minsize="18"
        >
          <label>Let’s Talk</label>
        </SecondaryButton>
      </TalkSec>
    </Container>
  );
};

export default Talk;
