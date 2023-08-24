import React from 'react'
import { WebsiteText } from "./FreeWebsiteStyles";
import Image from "next/image";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";

const FreeWebsite = () => {
  return (
    <WebsiteText>
      <Container className="container">
        <h1>Get Your FREE Website Audit Now!</h1>
        <SecondaryButton
          bg="#fff"
          width="358"
          minWidth="350"
          height="50"
          minheight="40"
          size="24"
          minsize="18"
          radius="8px"
        >
          <label> Take Action on My Website</label>
        </SecondaryButton>
      </Container>
    </WebsiteText>
  );
};

export default FreeWebsite
