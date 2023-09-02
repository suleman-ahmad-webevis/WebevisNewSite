import React from "react";
import { TogetherContent, TogetherHolder } from "./Together.styles";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";

const Together = () => {
  return (
    <TogetherHolder>
      <Container>
        <TogetherContent>
          <h3>Work Together</h3>
          <h2>Have Any Project On Your Minds?</h2>
          <PrimaryButton
            width="245"
            height="60"
            size="24"
            minsize="18"
            radius="100px"
          >
            Let’s Talk
          </PrimaryButton>
        </TogetherContent>
      </Container>
    </TogetherHolder>
  );
};

export default Together;
