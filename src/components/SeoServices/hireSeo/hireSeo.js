import React from "react";
import { SecondaryButton } from "../../Button.styles";
import { Container } from "../../Container.styles";
import { Seo, SeoHolder } from "./hireSeo.styles";

const HireSeo = () => {
  return (
    <SeoHolder>
      <Container>
        <Seo>
          <h2>You have a vision. We have a team to get you there.</h2>
          <SecondaryButton
            width="238"
            minWidth="273.33"
            height="50"
            minheight="40"
            size="24"
            minsize="18"
            radius="10px"
            hover="#fff"
            bgText="#fff"
            bgTextH="linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"
          >
            <label>Request a Quote</label>
          </SecondaryButton>
        </Seo>
      </Container>
    </SeoHolder>
  );
};

export default HireSeo;
