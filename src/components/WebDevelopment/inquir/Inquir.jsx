import React from "react";
import { InquirSec } from "./Inquir.style";
import { SecondaryButton } from "src/components/Button.styles";
import { Container } from "src/components/Container.styles";

const Inquir = () => {
  return (
    <InquirSec>
      <Container className="container">
        <div className="inqiur_Text">
          <h3>Unlock Online Success with Expert Web Development.</h3>
        </div>
        <SecondaryButton
          size="18"
          min-width="155px"
          height="50"
          radius="12px"
          bg="#fff"
          hover="black"
        >
          {" "}
          <label> Inquire Now </label>{" "}
        </SecondaryButton>
      </Container>
    </InquirSec>
  );
};

export default Inquir;
