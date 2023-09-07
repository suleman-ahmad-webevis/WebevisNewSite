import React from "react";
import { WordSec } from "./Word.style";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";

const Word = () => {
  return (
    <WordSec>
      <Container className="container">
          <h3>
            Build great products with Webevis WordPress Development Services.
          </h3>
        <SecondaryButton width="191" minWidth="143" minheight="40" minsize="18" height="50" size="24" bg="#FFF" radius="4px">
          <label>Get Started</label>
        </SecondaryButton>
      </Container>
    </WordSec>
  );
};

export default Word;
