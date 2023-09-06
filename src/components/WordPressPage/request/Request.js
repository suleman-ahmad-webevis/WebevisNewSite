import React from "react";
import { RequestSec } from "./Request.style";
import { Container } from "src/components/Container.styles";
import { SecondaryButton } from "src/components/Button.styles";

const Request = () => {
  return (
    <RequestSec>
      <Container className="container">
        <h3>Ready to Elevate Your Online Presence? Request Our WordPress Services Today</h3>
        <SecondaryButton width="313" minWidth="240" minheight="40" minsize="18" height="60" size="24" radius="12px" minradius="5px" bg="#fff">
          <label>Request A Free Qoute</label>
        </SecondaryButton>
      </Container>
    </RequestSec>
  );
};

export default Request;
