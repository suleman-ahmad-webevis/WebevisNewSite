import React from 'react'
import { UnlockContainer, Button } from './UnlockStyles'
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";

const Unlock = () => {
  return (
    <UnlockContainer>
      <Container className="container">
        <h2>Unlock the Secrets of Your Competitors&apos; Success </h2>
        <SecondaryButton
          width="358"
          minWidth="350"
          radius="12px"
          height="50"
          minheight="40"
          bg="#fff"
          hover="black"
          size="24"
          minsize="18"
        >
          <label>Get My Free Report</label>
        </SecondaryButton>
      </Container>
    </UnlockContainer>
  );
};

export default Unlock
