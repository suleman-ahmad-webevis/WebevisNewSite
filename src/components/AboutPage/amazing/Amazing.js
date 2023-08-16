import React from "react";
import { Container } from "src/components/Container.styles";
import { Amazon, LastHeading, Button } from "./Amazing.style";
import { ContainerWrapper } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";
const Amazing = () => {
  return (
    <Amazon>
      <ContainerWrapper>
        <LastHeading>
          <h1>Let&apos;s Make It Happen Together!</h1>
          <PrimaryButton
            size="18"
            minsize="14"
            radius="8px"
            bg="#434956"
            shadowH="none"
          >
            Contact Now
          </PrimaryButton>
        </LastHeading>
      </ContainerWrapper>
    </Amazon>
  );
};

export default Amazing;
