import React from "react";
import { ConsultSec } from "./Consult.style";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";

const Consult = () => {
  return (
    <Container className="container">
      <ConsultSec>
        <h3>
          Are you worried about suitable customizations <br /> to improve
          eCommerce conversions?
        </h3>
        <PrimaryButton
          width="373"
          height="60"
          minWidth="201"
          minsize="16"
          minheight="40"
          radius="12px"
          bg="#2B2C2F"
        >
          Free Consultation
        </PrimaryButton>
      </ConsultSec>
    </Container>
  );
};

export default Consult;
