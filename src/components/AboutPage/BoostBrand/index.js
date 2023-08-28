import React from "react";

import { Amazon, LastHeading } from "./boostbrand.style";
import { Container } from "src/components/Container.styles";

import { SecondaryButton } from "src/components/Button.styles";

const Amazing = () => {
  return (



    <Amazon>
      <Container>
        <LastHeading>
          <h1>Supercharge Your Marketing with a Dedicated Digital Marketer!</h1>
          <SecondaryButton
            size="18"
            minsize="14"
            radius="8px"
            // bg="#434956"
            shadowH="none"
          >
            Boost My Brand
          </SecondaryButton>
        </LastHeading>
      </Container>
    </Amazon>




  );
};

export default Amazing;
