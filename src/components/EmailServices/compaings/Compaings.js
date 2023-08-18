import React from "react";
import {
  CompSection,
  CompHeading,
  EmailComp,
  EmailDiv,
  BtnCom
} from "./Compaings.style";
import Image from "next/image";
import img1 from "../../../assets/images/Services/EmailServices/real1.png"
import img2 from "../../../assets/images/Services/EmailServices/real2.png"
import img3 from "../../../assets/images/Services/EmailServices/real3.png"
import img4 from "../../../assets/images/Services/EmailServices/real3.png"
import img5 from "../../../assets/images/Services/EmailServices/real5.png"
import img6 from "../../../assets/images/Services/EmailServices/real6.png"
import img7 from "../../../assets/images/Services/EmailServices/real7.png"
import img8 from "../../../assets/images/Services/EmailServices/real8.png"
import img9 from "../../../assets/images/Services/EmailServices/real9.png"
import { Container } from "src/components/Container.styles";
import { PrimaryButton } from "src/components/Button.styles";

const Compaings = () => {
  return (
    <>
      <Container>
        <CompHeading>
          <div className="our-email">
            <p>OUR EMAIL MARKETING CAMPAIGNS</p>
            <h1>We offer many types of email marketing campaigns</h1>
            <p>
              With the addition of additional services, your business can grow
              even faster.
            </p>
          </div>

          <EmailComp>
            <EmailDiv>
              <Image src={img1} alt="img" />
              <h1>Newsletter Campaign</h1>
              <p>Remind everyone what&apos;s been missed</p>
            </EmailDiv>
            <EmailDiv>
              <Image src={img2} alt="img" />
              <h1>Product Launch Campaign</h1>
              <p>
                Introduce a new product and provide details about the launch
              </p>
            </EmailDiv>
            <EmailDiv>
              <Image src={img3} alt="img" />
              <h1>Drip/Lifecycle Campaign</h1>
              <p>
                Make users&apos; buying behavior more likely to be influenced
              </p>
            </EmailDiv>
            <EmailDiv>
              <Image src={img4} alt="img" />
              <h1>Seasonal / Festive / Occasion Campaign</h1>
              <p>
                Send your best wishes, make offers, and drive more conversions
              </p>
            </EmailDiv>
            <EmailDiv>
              <Image src={img5} alt="img" />
              <h1>Re-engagement Campaign</h1>
              <p>Identify inactive users and engage with them</p>
            </EmailDiv>
            <EmailDiv>
              <Image src={img6} alt="img" />
              <h1>
                Cart Abandonment <br /> Campaign
              </h1>
              <p>
                Encourage customers to complete the purchase of items in cart
              </p>
            </EmailDiv>
            <EmailDiv>
              <Image src={img7} alt="img" />
              <h1>Welcome Campaign</h1>
              <p>A campaign to welcome and inform what to expect next</p>
            </EmailDiv>
            <EmailDiv>
              <Image src={img8} alt="img" />
              <h1>After-sales/Post-purchase Campaign</h1>
              <p>Keep your customers informed about their orders</p>
            </EmailDiv>
            <EmailDiv>
              <Image src={img9} alt="img" />
              <h1>Standard Campaign</h1>
              <p>Leads, customers, and past customers can be nurtured</p>
            </EmailDiv>
          </EmailComp>
          <BtnCom>
            <PrimaryButton
              color="white"
              width="355"
              height="50"
              bg="linear-gradient(151deg, #1FABD3 0%, #1CCC97 100%)"
            >
              Book Free Consultation Call
            </PrimaryButton>
          </BtnCom>
        </CompHeading>
      </Container>
    </>
  );
};

export default Compaings;
