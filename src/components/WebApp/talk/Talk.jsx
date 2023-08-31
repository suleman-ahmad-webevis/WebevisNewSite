import React from "react";
import { TalkSec } from "./Talk.style";
import { PrimaryButton } from "src/components/Button.styles";
import { Container } from "src/components/Container.styles";

const Talk = () => {
  return (
    <Container>
      <TalkSec>
        <h3>
          Are you ready to take your business to new heights with a cutting-edge
          web app? Dont miss out on this incredible opportunity! Click below
        </h3>
        <div className="buttons">
          <PrimaryButton
            size="24"
            width="386"
            minWidth="200"
            minsize="18"
            minheight="40"
            height="60"
          >
            Talk To Our Experts
          </PrimaryButton>
        </div>
      </TalkSec>
    </Container>
  );
};

export default Talk;
