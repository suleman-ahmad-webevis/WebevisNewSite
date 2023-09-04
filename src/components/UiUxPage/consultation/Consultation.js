import React from "react";
import { SecondaryButton } from "src/components/Button.styles";
import { ConsultationSec } from "./Consultation.style";
import { Container } from "src/components/Container.styles";

const Consultation = () => {
  return (
    <ConsultationSec>
      <Container className="container">
        <h3>
          Want to Discuss Your Project?At Webevis Technologies <br/> We Think
          Differently –Because Different is Better!
        </h3>
        <SecondaryButton width="255" height="50" minWidth="201" minsize="16" minheight="40" radius="12px" bg="#fff">
          <label>Free Consultation</label>
        </SecondaryButton>
      </Container>
    </ConsultationSec>
  );
};

export default Consultation;
