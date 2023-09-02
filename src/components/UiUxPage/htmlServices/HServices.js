import React from "react";
import { HtmlSec } from "./HServices.style";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";

const HServices = () => {
  return (
    <Container>
      <HtmlSec>
        <div className="text">
          <h3>What’s Included in PSD to HTML Service?</h3>
          <p>
            We provide world-class service of PSD to HTML conversion by
            optimizing the performance finely and leveraging the latest
            technology.
          </p>
          <PrimaryButton width="255" height="50" radius="6px" size="24">
            Free Estimate
          </PrimaryButton>
        </div>
        <div className="card"></div>
        <div className="card"></div>
      </HtmlSec>
    </Container>
  );
};

export default HServices;
