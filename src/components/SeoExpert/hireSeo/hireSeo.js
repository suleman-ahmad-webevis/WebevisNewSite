import React from "react";
import { SecondaryButton } from "../../Button.styles";
import { Container } from "../../Container.styles";
import { Seo, SeoHolder } from "./hireSeo.styles";

const HireSeo = () => {
  return (
    <SeoHolder>
      <Container>
        <Seo>
          <h2>Are You Looking To Hire seo experts?</h2>
          <SecondaryButton bg="#fff" width="191" height="50" size="24">
            <label>Contact Us</label>
          </SecondaryButton>
        </Seo>
      </Container>
    </SeoHolder>
  );
};

export default HireSeo;
