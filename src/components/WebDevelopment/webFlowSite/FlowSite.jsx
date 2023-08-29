import React from "react";
import { FlowSec } from "./FlowSite.style";
import Image from "next/image";
import webflowImage from "../../../assets/images/Services/WebDevelopmentServices/flow.png";
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";

const FlowSite = () => {
  return (
    <Container>
      <FlowSec>
        <div className="flow_text">
          <h3>Looking to design & develop an amazing Webflow website?</h3>
          <p>
            If you want to get a hand from the amazing team behind Templates,
            get in touch with Agency today.
          </p>
          <PrimaryButton width="147" height="50" radius="25px">
            Get a quote
          </PrimaryButton>
        </div>
        <div className="flow_image">
          <Image src={webflowImage} alt="webflowImage" />
        </div>
      </FlowSec>
    </Container>
  );
};

export default FlowSite;
