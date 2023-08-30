import React from "react";
import { Container } from "../../Container.styles";
import { Privacy, PrivacyHolder } from "./Hero.styles";

const Hero = ({ heading }) => {
  return (
    <PrivacyHolder>
      <Container>
        <Privacy>
          <h1>{heading}</h1>
          <p>
            Thank you for visiting Webevis (“we”, “us”, or “our”). We need to
            collect some information about you, and this Privacy Policy will
            describe what we collect and why we do it. If you want to disable
            this, then there are a few methods described below as well. This
            policy shall also describe your rights and choices concerning your
            personal information. However, do note that by continuing to
            visit/stay on our Site, and using the features made available to you
            on the Site, you are agreeing to the terms of this Privacy Policy.
            Our Website may also include links to other websites whose privacy
            policies can differ from those of InvoZone. If you submit
            information to any of the third-party links that you go through,
            your information will be handled according to their privacy
            statements. That is why we encourage our visitors to carefully read
            the privacy statements of all websites when they visit.
          </p>
        </Privacy>
      </Container>
    </PrivacyHolder>
  );
};

export default Hero;
