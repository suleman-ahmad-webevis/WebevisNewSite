import React from "react";
import { GridDiv, MarketGrid, EmailHeading } from "./EmailMarketing.style";
import Image from "next/image";
import img1 from "../../EmailServices/assests/platform.png";
import img2 from "../../EmailServices/assests/newsletter.png";
import img3 from "../../EmailServices/assests/cart.png";
import img4 from "../../EmailServices/assests/signup.png";
import img5 from "../../EmailServices/assests/cross_selling.png";
import img6 from "../../EmailServices/assests/upselling.png";
import img7 from "../../EmailServices/assests/subscriber.png";
import img8 from "../../EmailServices/assests/email_audit.png";
import img9 from "../../EmailServices/assests/email_automation.png";
import img10 from "../../EmailServices/assests/b_testing.png";
import { Container } from "src/components/Container.styles";

const EmailMarketing = () => {
  return (
    <Container className="container">
      <EmailHeading>Our Email Marketing Services</EmailHeading>
      <MarketGrid>
        <GridDiv>
          <Image src={img1} alt="img" />
          <h1>
            Platform <br /> Setup
          </h1>
        </GridDiv>
        <GridDiv>
          <Image src={img2} alt="img" />
          <h1>
            Newsletter <br /> Creation
          </h1>
        </GridDiv>
        <GridDiv>
          <Image src={img3} alt="img" />
          <h1>
            Cart <br /> Abandonment
          </h1>
        </GridDiv>
        <GridDiv>
          <Image src={img4} alt="img" />
          <h1>
            Newsletter <br /> Sign Up
          </h1>
        </GridDiv>
        <GridDiv>
          <Image src={img5} alt="img" />
          <h1>
            Cross- <br /> selling
          </h1>
        </GridDiv>
        <GridDiv>
          <Image src={img6} alt="img" />
          <h1>
            Cross-Upselling <br /> Workflow
          </h1>
        </GridDiv>
        <GridDiv>
          <Image src={img7} alt="img" />
          <h1>
            Subscriber <br /> Growth
          </h1>
        </GridDiv>
        <GridDiv>
          <Image src={img8} alt="img" />
          <h1>Email Audit </h1>
        </GridDiv>
        <GridDiv>
          <Image src={img9} alt="img" />
          <h1>
            Email <br /> Automation
          </h1>
        </GridDiv>
        <GridDiv>
          <Image src={img10} alt="img" />
          <h1>
            A/B Split <br /> Testing
          </h1>
        </GridDiv>
      </MarketGrid>
    </Container>
  );
};

export default EmailMarketing;
